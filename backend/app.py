import sqlite3
import json
import traceback
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def get_db_connection():
    conn = sqlite3.connect('afyalink.db')
    conn.row_factory = sqlite3.Row 
    return conn

@app.route('/api/team', methods=['GET'])
def get_all_team_members():
    try:
        conn = get_db_connection()
        members = conn.execute('SELECT * FROM team_members').fetchall()
        conn.close()
        return jsonify([dict(member) for member in members]), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/team/<string:slug>', methods=['GET'])
def get_single_team_member(slug):
    try:
        conn = get_db_connection()
        member = conn.execute('SELECT * FROM team_members WHERE slug = ?', (slug,)).fetchone()
        conn.close()
        if member is None:
            return jsonify({"error": "Team member not found"}), 404
        return jsonify(dict(member)), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/maternal/<string:section>/<string:lang>', methods=['GET'])
def get_maternal_content(section, lang):
    try:
        conn = get_db_connection()
        topics = conn.execute(
            'SELECT * FROM maternal_topics WHERE section = ? AND language = ? ORDER BY id ASC', 
            (section, lang)
        ).fetchall()
        conn.close()
        
        if not topics:
            return jsonify([]), 200
            
        topics_list = []
        for row in topics:
            topic = dict(row)
            # Safely parse JSON strings into Python lists
            try:
                topic['tips'] = json.loads(topic['tips']) if topic['tips'] else []
                topic['myths'] = json.loads(topic['myths']) if topic['myths'] else []
                topic['takeaways'] = json.loads(topic['takeaways']) if topic['takeaways'] else []
                topic['faqs'] = json.loads(topic['faqs']) if topic['faqs'] else []
            except Exception as parse_error:
                print(f"Error parsing JSON for topic {topic['id']}: {parse_error}")
                topic['tips'] = []
                topic['myths'] = []
                topic['takeaways'] = []
                topic['faqs'] = []
                
            topics_list.append(topic)
            
        return jsonify(topics_list), 200
    except Exception as e:
        print("🚨 BACKEND ERROR:")
        traceback.print_exc() # This prints the exact line of the error in the terminal
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    print("🚀 AfyaLink Python Backend running on http://localhost:5000")
    app.run(debug=True, port=5000)