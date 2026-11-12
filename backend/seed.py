import sqlite3

conn = sqlite3.connect('afyalink.db')
cursor = conn.cursor()

# Clear existing data
cursor.execute("DELETE FROM team_members;")

members = [
    ("abdirizack-bashor", "Abdirizack Bashor", "Medical Researcher & Cybersecurity Professional", "/team/image1.jpeg", "object-center", "from-emerald-500 via-teal-500 to-cyan-500", 
     "MSc in Medical Research", "Bridging clinical research", 
     "Growing up in Northeastern Kenya, I witnessed firsthand how critical health information rarely reached families in a form they could trust. In many remote villages, rumors and misinformation often spread faster than verified medical advice, leading to dangerous delays in seeking treatment. This gap deeply troubled me and inspired my journey into medical research.\n\nI realized that the problem wasn't a lack of modern medicine, but rather a lack of accessible, localized, and secure digital infrastructure. This drove me to bridge the worlds of clinical research and secure digital health systems, ensuring that technology truly serves the underserved communities I grew up with.", 
     "The journey was far from easy. I struggled with limited internet access and a severe lack of medical resources while growing up in remote areas. Even when I began building digital solutions, I faced the monumental challenge of building trust. Communities were deeply skeptical of digital platforms, fearing that their sensitive health data would be stolen.\n\nFurthermore, we had to design a system that could function on extremely low bandwidth, as many families could not afford high-speed internet. Overcoming these technical and cultural hurdles required relentless empathy and a strict adherence to data privacy.", 
     "Despite these obstacles, I successfully built a secure, offline-capable platform that now serves thousands of families without compromising their privacy. We established robust data encryption protocols that meet international standards while remaining lightweight enough for local clinics to manage.\n\nThe most profound success for me wasn't just the technology, but the trust we built. When local elders and mothers began actively using the platform to access verified health tips, we knew we had created something truly sustainable.", 
     "As the lead architect, I developed the core backend of AfyaLink, ensuring that health information reaches the most remote communities safely. I designed the system to be incredibly lightweight, capable of syncing data when a user walks into a clinic with Wi-Fi, and functioning offline when they return home.\n\nBeyond the code, I personally trained dozens of local health workers on how to manage the system, ensuring that the community has ownership over their own health data.",
     "Watching a mother navigate AfyaLink in Somali, read about maternal warning signs, and reach the right clinic within minutes."),
     
    ("dr-amina-hassan", "Dr. Amina Hassan", "Medical Advisor", "/team/image2.png", "object-center", "from-teal-500 via-cyan-500 to-sky-500", 
     "MBBS, University of Nairobi", "8 years in public health and maternal care", 
     "With a deep passion for maternal health, I have spent my career working in rural clinics across Garissa County. Growing up in a family where medical care was scarce, I dedicated my life to ensuring that mothers and children receive the care they deserve, regardless of their location.\n\nI believe that every mother deserves a safe pregnancy and a healthy delivery. My background in medicine has taught me that saving lives often starts with the simplest things: clean water, proper nutrition, and access to accurate health information.", 
     "One of the biggest challenges I faced was resistance from local communities who were deeply skeptical of modern medicine and digital tools. Breaking down these cultural barriers required immense patience, listening to their concerns, and working side-by-side with community elders to build trust.\n\nAdditionally, we constantly had to combat dangerous misinformation about pregnancy and childbirth spreading in rural areas. We had to replace old wives' tales and unverified advice with scientifically backed, easy-to-understand facts.", 
     "Through persistent education and community engagement, we successfully reduced maternal mortality rates in our local clinic by 30% over three years. We also saw a significant increase in early prenatal check-ups, ensuring safer deliveries for hundreds of mothers.\n\nSeeing the joy on the faces of healthy mothers holding their newborns is the greatest reward I could ever ask for.", 
     "I trained local nurses and translated complex medical advice into culturally acceptable terms for the community. I personally reviewed and verified every maternal health article on the AfyaLink platform to guarantee medical accuracy.\n\nMy goal was to ensure that no matter where a mother lives, she has access to the same high-quality medical guidance that someone in the capital city would receive.",
     "Educating young mothers on the importance of postnatal check-ups and seeing their confidence grow."),
     
    ("yasmin-osman", "Yasmin Osman", "Community Liaison", "/team/image3.png", "object-top", "from-lime-500 via-emerald-500 to-teal-500", 
     "Diploma in Community Health", "5 years as a Community Health Worker (CHW)", 
     "I have dedicated my life to serving my community and ensuring no family is left behind. Having worked as a Community Health Worker in Dadaab, I understand the unique challenges families face daily, from language barriers to navigating complex health systems.\n\nI grew up seeing women struggle to communicate their health needs, so I made it my mission to be a voice for the voiceless and a bridge between the community and healthcare providers.", 
     "Language barriers and reaching families in remote refugee camps with limited connectivity were massive hurdles. Many community members had never used a smartphone app before, and some were initially intimidated by the technology.\n\nI had to physically sit with families, sometimes for hours, to explain how the application works and reassure them that it was completely free and safe to use.", 
     "Successfully onboarded over 1,000 families onto the AfyaLink platform in just six months. By organizing face-to-face workshops and using local dialects, we transformed a daunting digital tool into a trusted everyday resource.\n\nThe moment we saw community members teaching their neighbors how to use the app, we knew the project was a success.", 
     "I acted as the bridge between the tech team and the community, ensuring the app feels local and accessible. I translated the entire platform's navigation and health articles into Somali and Kiswahili, ensuring no one is excluded due to language.\n\nI also organized community awareness sessions to teach families how to recognize emergency symptoms and when to seek immediate medical help.",
     "Training elderly community members on how to navigate the mobile interface."),
     
    ("mohamed-abdirahi", "Mohamed Abdirahi", "Maternal Health Specialist", "/team/image4.png", "object-top", "from-cyan-500 via-sky-500 to-teal-500", 
     "MSc in Public Health", "6 years coordinating maternal health programs", 
     "I grew up in a family of nurses and always knew I wanted to help mothers. My academic background in public health, combined with my family's legacy of caregiving, drives my commitment to improving maternal health outcomes in our region.\n\nI believe that maternal health is the cornerstone of a healthy society. When a mother is healthy, her children thrive, and the entire community benefits.", 
     "Combating misinformation about pregnancy and childbirth that was spreading in rural areas was our biggest challenge. We constantly had to counter old wives' tales and unverified advice with scientifically backed, easy-to-understand facts.\n\nWe also faced logistical challenges in delivering essential medical supplies to remote clinics due to poor road infrastructure.", 
     "Created a maternal health curriculum that is now used in 5 local clinics. This curriculum focuses on nutrition, warning signs during pregnancy, and the importance of skilled birth attendants.\n\nWe successfully trained over 50 traditional birth attendants to recognize danger signs and refer mothers to hospitals before complications arise.", 
     "I wrote the maternal care guides and checklists used on the platform, ensuring that pregnant mothers know exactly when to visit a clinic and what signs to watch out for during their pregnancy.\n\nI also coordinated with local leaders to establish emergency transport systems for mothers in remote villages.",
     "Visiting clinics and listening to the stories of mothers who safely delivered healthy babies."),
     
    ("khalid-omar", "Khalid Omar", "Data & Research Officer", "/team/image5.png", "object-center", "from-emerald-500 via-teal-500 to-cyan-500", 
     "BSc in Statistics", "4 years analyzing community health data", 
     "I believe that data tells the real story of what a community needs. My passion lies in uncovering hidden trends in health data that can inform better decision-making and resource allocation for our local clinics.\n\nNumbers aren't just abstract concepts to me; they represent real lives, real mothers, and real children whose outcomes can be improved through better planning.", 
     "Lack of accurate, digitized health records in local clinics made it difficult to track patient progress. Most records were paper-based, easily lost, and hard to aggregate for meaningful analysis.\n\nIt took a massive effort to digitize thousands of old paper records and train local staff on how to input new data accurately.", 
     "Built a lightweight data collection system now used by local health workers. This system simplified patient tracking and provided real-time analytics on common health issues in the community.\n\nThanks to this data, we were able to identify a malnutrition hotspot in a specific village and deploy targeted nutrition programs immediately.", 
     "I analyzed patient feedback and app usage data to identify the most requested features, ensuring the app is truly useful and tailored to the community's actual needs rather than just our assumptions.\n\nI also created visual dashboards for clinic managers so they can easily see which diseases are on the rise.",
     "Turning complex data into simple, visual insights that local clinic managers can easily understand."),
     
    ("james-garace", "James Garace", "Content Creator & Translator", "/team/image6.png", "object-top", "from-teal-500 via-cyan-500 to-sky-500", 
     "BA in Linguistics", "3 years of professional translation and community writing", 
     "Language is the bridge to trust, and I want every mother to feel understood. My background in linguistics has shown me how crucial it is to communicate health information in a way that resonates culturally and emotionally.\n\nA medical fact is useless if the person reading it cannot understand it in their own mother tongue. I take pride in making complex things simple.", 
     "Translating complex medical jargon into simple terms without losing the medical accuracy was an immense challenge. It required deep collaboration with doctors to ensure the simplified language still conveyed the correct medical advice.\n\nWe also had to navigate different regional dialects to ensure the translations were universally understood across different communities.", 
     "Created a localized health dictionary now used by other organizations in the region. This dictionary standardizes how medical terms are translated into Somali and Kiswahili in our context.\n\nOur translated materials have been praised for being compassionate, clear, and culturally respectful.", 
     "I wrote and translated the health tips and articles into clear, simple Kiswahili and Somali, ensuring that language is no longer a barrier to accessing life-saving health information.\n\nI also recorded audio versions of the articles for community members who cannot read or prefer listening while working.",
     "Reading feedback from users who finally understand their health conditions in their own language."),
     
    ("olivia-kamau", "Olivia Kamau", "Community Outreach Volunteer", "/team/image7.png", "object-center", "from-lime-500 via-emerald-500 to-teal-500", 
     "Certificate in Social Work", "2 years volunteering in local health campaigns", 
     "Giving back to my community is the most rewarding thing I do. I have always been drawn to social work because I believe that real change happens when we connect with people on a human level and help them navigate their daily challenges.\n\nI have a deep love for my people, and I want to see our community thrive in health and prosperity.", 
     "Convincing people to use a digital app when they are used to traditional methods was initially difficult. Many people were skeptical that an app could provide real medical help or that it was free of charge.\n\nWe had to overcome the fear that the app would consume their limited mobile data, so we demonstrated how lightweight and offline-friendly it is.", 
     "Organized over 20 community workshops, directly helping hundreds of families register and learn how to use the app. The workshops became a safe space for people to ask questions and share their health concerns.\n\nSeeing the number of active users grow week by week was a testament to the hard work of our outreach team.", 
     "I personally walked families through the app, showing them how to find doctors, read health tips, and access emergency contacts. This hands-on approach built a sense of trust and ownership within the community.\n\nI also created a network of 'health ambassadors'—local youths trained to help their elders use the app.",
     "Seeing the excitement on people's faces when they realize the app is completely free.")
]

cursor.executemany('''
    INSERT INTO team_members (
        slug, name, role, image, position, accent, education, 
        experience, background, challenges, success, contribution, funFact
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
''', members)

conn.commit()
conn.close()
print("✅ Successfully inserted full, detailed paragraphs into SQLite!")