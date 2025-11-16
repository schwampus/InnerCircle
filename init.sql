CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE users (
users_id uuid PRIMARY KEY DEFAULT gen_random_uuid(), 
users_name VARCHAR(50) NOT NULL,
users_email VARCHAR(50) NOT NULL UNIQUE,
users_avatar TEXT DEFAULT 'avatar1.png',
users_pass TEXT NOT NULL),
users_payment VARCHAR(50) DEFAULT 'VISA';

CREATE TABLE category (
category_id SERIAL PRIMARY KEY,
category_name VARCHAR(30) NOT NULL UNIQUE,
category_image TEXT);

CREATE TABLE circle (
circle_id SERIAL PRIMARY KEY,
circle_name VARCHAR(50) NOT NULL,
circle_avatar TEXT NOT NULL DEFAULT 'avatar2.png',
circle_category INT,
circle_bio VARCHAR(250),
circle_slug VARCHAR(255) UNIQUE,
circle_members VARCHAR(50), 
FOREIGN KEY (circle_category) REFERENCES category (category_id)
);

CREATE TABLE userCircle (
uc_id SERIAL PRIMARY KEY,
uc_circle_tier VARCHAR(50) NOT NULL,
uc_circle_id INTEGER NOT NULL,
FOREIGN KEY (uc_circle_id) REFERENCES circle (circle_id),
uc_user_id uuid NOT NULL,
FOREIGN KEY (uc_user_id) REFERENCES users (users_id)
ON DELETE CASCADE);

CREATE TABLE post (
post_id SERIAL PRIMARY KEY,
post_title varchar(75) NOT NULL,
post_text TEXT NOT NULL,
post_content TEXT,
post_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
post_tier varchar(30) NOT NULL,
post_author  INTEGER,
FOREIGN KEY (post_author) REFERENCES circle (circle_id)
);

INSERT INTO category (category_name, category_image)
VALUES
('Surf', '/images/cat/surf.webp'),
('Snow', '/images/cat/snow.webp'),
('Climb', '/images/cat/climb.webp'),
('Bike', '/images/cat/bike.webp'),
('Kayak', '/images/cat/kayak.webp'),
('Fly', '/images/cat/fly.webp'),
('Skate', '/images/cat/skate.webp');

INSERT INTO circle (circle_name, circle_category, circle_bio, circle_members)
VALUES
('Kelly Slater', 1, '11-time world surfing champion known for redefining modern surfing.', '18.5k'),
('John John Florence', 1, 'Hawaiian surfer celebrated for his power and style.', '15.2k'),
('Maya Gabeira', 1, 'Big wave surfer and record-holder for largest wave surfed by a woman.', '12.8k'),
('Laird Hamilton', 1, 'Pioneer of tow-in surfing and big wave legend.', '9.3k'),
('Candide Thovex', 2, 'French freeride skier known for boundary-pushing video segments.', '14.7k'),
('Shaun White', 2, 'Three-time Olympic gold medalist in snowboarding.', '20.9k'),
('Chloe Kim', 2, 'Olympic snowboard halfpipe champion with record-breaking runs.', '16.4k'),
('Travis Rice', 2, 'Backcountry snowboarder and filmmaker.', '11.2k'),
('Alex Honnold', 3, 'Free solo climber famous for scaling El Capitan without ropes.', '19.8k'),
('Adam Ondra', 3, 'Czech climber known for the hardest sport routes in the world.', '13.5k'),
('Tommy Caldwell', 3, 'Big wall climber who freed the Dawn Wall.', '15.9k'),
('Ashima Shiraishi', 3, 'Prodigy climber with groundbreaking boulder ascents.', '8.7k'),
('Danny MacAskill', 4, 'Scottish trials rider known for creative urban stunts.', '17.3k'),
('Rachel Atherton', 4, 'Multiple-time downhill mountain biking world champion.', '10.5k'),
('Loïc Bruni', 4, 'French downhill racer with several world titles.', '9.8k'),
('Brandon Semenuk', 4, 'Freeride mountain biker and multiple Red Bull Rampage winner.', '14.1k'),
('Dane Jackson', 5, 'Freestyle kayaker and extreme whitewater racer.', '6.2k'),
('Nouria Newman', 5, 'French kayaker known for solo expeditions and waterfalls.', '5.4k'),
('Eric Jackson', 5, 'World champion and founder of Jackson Kayak.', '4.8k'),
('Aniol Serrasolses', 5, 'Extreme kayaker pushing first descents worldwide.', '5.9k'),
('Jeb Corliss', 6, 'Wingsuit pilot and BASE jumper known for proximity flying.', '18.2k'),
('Felix Baumgartner', 6, 'Skydiver who jumped from the stratosphere.', '16.7k'),
('Roberta Mancino', 6, 'Skydiver, wingsuit flyer, and stunt performer.', '12.3k'),
('Luke Aikins', 6, 'Skydiver known for landing safely without a parachute.', '8.1k'),
('Tony Hawk', 7, 'Legendary skateboarder and first to land a 900.', '20.5k'),
('Nyjah Huston', 7, 'Street skating champion with multiple X Games titles.', '19.4k'),
('Leticia Bufoni', 7, 'Brazilian pro skater and Olympian.', '17.6k'),
('Rodney Mullen', 7, 'Inventor of numerous modern street skating tricks.', '11.8k');

UPDATE circle 
SET circle_slug = LOWER(REPLACE(circle_name, ' ', '-'));

UPDATE circles
SET circle_avatar = '/images/athletes/' || circle_slug || '.webp'
WHERE circle_id IN (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28);

INSERT INTO post (post_title, post_text, post_content, post_tier, post_author) 
VALUES
('Chasing Perfect Waves', 'Behind the scenes of my latest surf trip to Tahiti.', '/images/posts/1_wave.jpg', 'Gold', 1),
('Ocean Mindset', 'Surfing is more than just riding waves; it teaches patience, focus, and respect for the ocean. Spending hours waiting for the perfect set challenges both mind and body. Every wave presents a new lesson in timing, balance, and adaptability. The more you listen to the sea, the better you understand yourself and your limits.', NULL, 'Bronze', 1),
('Pipeline Sessions', 'Training for the next season at the North Shore.', '/images/posts/3_pipe.jpg', 'Gold', 2),
('Ride Reflections', 'Pipeline is not just about big waves—it is a test of concentration, resilience, and creativity. Each session pushes you to adapt to the ocean''s unpredictability. Learning to read sets and position yourself properly is key. Surfing here is a blend of art and sport, and it keeps challenging me every day.', 'JNaiiKoZqrQ', 'Silver', 2),
('Fear and Flow', 'What big wave surfing teaches about fear.', '61irttIhTyY', 'Bronze', 3),
('Nazare Diaries', 'Record-breaking swells in Portugal push both mental and physical limits. Staying calm under such conditions requires trust in your skills and equipment. Every drop is a lesson in fear management and decision-making. The thrill of conquering these massive waves is indescribable, and the ocean teaches respect at every turn.', 'fTuqJE03aH4', 'Gold', 3),
('Tow-In Evolution', 'Reflections on two decades of surf innovation.', '/images/posts/7_towin.jpg', 'Gold', 4),
('Training Regimen', 'Staying strong and ready for monster waves requires a mix of strength, endurance, and mental focus. Each session pushes the body and mind, preparing for unpredictable conditions. Proper nutrition, recovery, and visualization techniques are as important as time spent on the water. Surfing has taught me discipline, patience, and creativity that extend beyond the ocean.', NULL, 'Silver', 4),
('Ski the Impossible', 'Behind the shoot for my latest line.', '/images/posts/Candide-Thovex-Crans-Montana-Park-Hero.jpg', 'Gold', 5),
('Mountain Flow', 'Freeriding requires reading the terrain, anticipating snow conditions, and balancing risk with creativity. Each descent teaches you more about timing and control, while pushing personal limits. The exhilaration of skiing untouched powder is unparalleled, and it continually inspires innovation in technique.', NULL, 'Bronze', 5);

INSERT INTO post (post_title, post_text, post_content, post_tier, post_author) 
VALUES
('Back to the Halfpipe', 'Post-Olympic reflections and new tricks.', '/images/posts/11_halfpipe.jpg', 'Gold', 6),
('Creative Flow', 'Snowboarding is more than medals; it''s about expression, creativity, and pushing yourself beyond comfort zones. Every run is a blend of style, speed, and technical skill. Practicing consistently builds confidence and allows you to innovate on the snow. Each jump and trick is a step towards mastering the art of the sport.', 'FVKlr9-WLfM', 'Silver', 6),
('Next Level Air', 'Building the perfect run takes more than luck.', '/images/posts/13_air.jpg', 'Gold', 7),
('Training Insights', 'Achieving high-level tricks requires dedication, repetition, and focus. Every session challenges your coordination and mental fortitude. Video analysis, strength training, and visualization are essential parts of preparation. Snowboarding pushes both physical and mental boundaries, and learning to embrace each challenge is key.', 'qnBMJHae1oE', 'Silver', 7),
('Alaska Missions', 'Filming in some of the steepest terrain I''ve seen.', NULL, 'Bronze', 8),
('Snowboard Philosophy', 'Freeriding teaches humility, patience, and respect for nature. Each mountain has unique challenges, and every descent is a learning experience. From avalanche awareness to reading terrain, the sport requires constant attention and adaptability. It is a test of skill, courage, and creativity that inspires both athletes and viewers.', '/images/posts/16_backcountry.jpg', 'Gold', 8),
('El Cap Reflections', 'Climbing without ropes changes everything.', 'Phl82D57P58', 'Bronze', 9),
('Solo Focus', 'Free soloing demands absolute concentration, mental clarity, and trust in your ability. Each move must be deliberate, and preparation extends far beyond physical training. Visualization and mindfulness are crucial to navigate the wall safely. The balance between fear and focus teaches lessons that extend well beyond climbing.', 'WeUoLWiVH8U', 'Gold', 9),
('Beyond Grades', 'How I approach impossible climbs.', 'b6OvrRbGU68', 'Gold', 10),
('Training Routine', 'Climbing at the top level is a puzzle of strength, technique, and patience. Every route challenges your problem-solving skills and endurance. Practicing moves repetitively while learning to conserve energy is essential. Each successful ascent brings a mix of satisfaction, humility, and motivation for the next challenge.', 'MBWHpwEYA24', 'Silver', 10),
('Dawn Wall Memories', 'Revisiting one of the hardest climbs in the world.', NULL, 'Bronze', 11),
('Partner Power', 'Climbing with a partner emphasizes trust, communication, and shared strategy. Coordinating movements and supporting each other through challenges strengthens teamwork. The experience teaches patience, resilience, and the value of collaboration, both on and off the rock.', '/images/posts/22_team.jpg', 'Gold', 11);

INSERT INTO post (post_title, post_text, post_content, post_tier, post_author) 
VALUES
('Bouldering Dreams', 'Chasing my next V15.', 'XmchZGKZ93U', 'Gold', 12),
('Training Insights', 'Each boulder problem tests strength, creativity, and focus. Progress comes from persistence, analyzing movements, and learning from failures. Bouldering teaches problem-solving, patience, and joy in incremental victories. Every session is both a mental and physical challenge, shaping resilience and confidence.', 'PGetmoTyNfc', 'Silver', 12),
('Urban Ride', 'Exploring Edinburgh rooftops.', 'Z19zFlPah-o', 'Gold', 13),
('Planning Stunts', 'Every stunt begins with careful planning and visualization. Scouting locations, understanding terrain, and rehearsing moves repeatedly ensures precision. Balancing risk and creativity is key. The thrill of nailing a complex line comes from preparation, focus, and trust in skill.', 'xQ_IQS3VKjA', 'Bronze', 13),
('Race Ready', 'Final prep for the downhill world cup.', 'GFK8R4NZjR0', 'Gold', 14),
('Helmet Cam', 'Recording each ride allows detailed analysis of technique, line choice, and efficiency. Every run is a chance to refine skills, improve timing, and boost confidence. Downhill racing challenges both body and mind with speed, terrain, and split-second decisions.', 'ZqbbcF4UyVw', 'Silver', 14),
('Worlds Recap', 'Back-to-back wins never get old.', NULL, 'Bronze', 15),
('French Alps Speed', 'Racing through the Alps tests control, courage, and endurance. Each descent demands precision, quick reflexes, and mental focus. Mountain biking in extreme conditions teaches resilience and the joy of mastering challenges. Every competition is a learning experience.', '/images/posts/30_speed.jpg', 'Gold', 15),
('Rampage Build', 'Scouting new lines in Utah.', '/images/posts/31_rampage.jpg', 'Gold', 16),
('Filming Tricks', 'Capturing tricks on camera requires coordination, timing, and creativity. Filming adds a layer of challenge while maintaining performance. Each stunt is an opportunity to combine athleticism and storytelling, creating a unique visual experience.', NULL, 'Bronze', 16),
('Cascades Mission', 'Running waterfalls in Washington.', '/images/posts/33_waterfall.jpg', 'Gold', 17),
('River Stories', 'Each rapid is a puzzle that tests technique, timing, and decision-making. Navigating wild water requires focus and anticipation. Kayaking challenges both body and mind, and the thrill of running a difficult line is unmatched. Every descent teaches respect for the river and its power.', 'W-J-4-XHwQ0', 'Silver', 17),
('Solo Descent', 'Kayaking through remote Himalayan rivers.', 'tZnGanWukIE', 'Bronze', 18),
('Wild Water', 'Remote rivers push limits of endurance and skill. Reading the currents, anticipating obstacles, and maintaining composure are essential. Each run builds confidence, sharpens instincts, and fosters a deep connection with nature. Kayaking in these conditions is as much about mental focus as physical prowess.', 'UGn3l9tTF10', 'Gold', 18);

INSERT INTO post (post_title, post_text, post_content, post_tier, post_author) 
VALUES
('Family & Flow', 'Balancing life and the river.', NULL, 'Bronze', 19),
('Kayak Design Talk', 'Designing kayaks requires understanding both the river and the paddler. Every shape, curve, and material affects performance. The craft of kayak design deepens appreciation for the sport and allows athletes to push boundaries. Continuous refinement ensures safety and peak performance.', '/images/posts/38_design.jpg', 'Gold', 19),
('Chilean Adventures', 'Pushing first descents deep in Patagonia.', '/images/posts/39_pata.jpg', 'Gold', 20),
('Waterfall POV', 'Running remote waterfalls demands precise skill, courage, and quick thinking. Each descent challenges reflexes, technique, and decision-making. The adventure is as much about mental preparation as physical ability, and every run leaves a lasting impression of the river''s power.', '2kE1rFCGbg0', 'Silver', 20);

INSERT INTO post (post_title, post_text, post_content, post_tier, post_author) 
VALUES
('Wingsuit Training', 'Flying close to the cliffs of Lauterbrunnen.', 'TWfph3iNC-k', 'Gold', 21),
('Helmet Cam', 'Proximity flying requires precise awareness and trust in technique. Each flight challenges coordination, timing, and nerves. The experience teaches focus, mental control, and flow. Being in the air is both exhilarating and humbling.', 'sNpJtT3x4_U', 'Silver', 21),
('Red Bull Stratos', 'Looking back on my record-breaking jump.', NULL, 'Bronze', 22),
('Sky is Home', 'Jumping from the stratosphere taught me to embrace fear and focus completely. Mental preparation and visualization are as important as physical readiness. Every calculation, motion, and contingency plan must be precise. The jump was both an extreme challenge and a personal milestone.', '/images/posts/44_jump.jpg', 'Gold', 22),
('Flight and Fear', 'Staying present midair.', '/images/posts/45_flight.jpg', 'Gold', 23),
('Night Flight', 'Flying at night tests your senses and focus in new ways. Every movement and decision counts, and trust in experience is essential. The perspective is unique, challenging, and rewarding. Night flights demand concentration, calm, and courage.', 'AUVFvU364EA', 'Silver', 23),
('No Parachute Landing', 'Breaking limits of safety and trust.', 'GaANi96Z-Wg', 'Gold', 24),
('Mindset Matters', 'Visualizing and rehearsing every detail is critical when performing extreme jumps. Mental focus, planning, and trust in your skills make the difference between success and failure. Each jump is a blend of preparation, courage, and confidence. The experience teaches lessons that extend beyond the sky.', 'QDPkUWugSUE', 'Bronze', 24),
('The 900 Story', 'How the impossible became possible.', 'l4zSZtYPPlo', 'Gold', 25),
('Skatepark Reflections', 'Designing skateparks is about inspiring creativity and providing safe spaces to experiment. It fosters community and encourages the next generation of skaters. Seeing young riders progress and innovate is incredibly rewarding. Skateboarding teaches resilience, persistence, and joy in the process.', 'g3Psa1Vf_0k', 'Bronze', 25),
('Street Focus', 'Consistency is the hardest trick.', '/images/posts/51_street.jpg', 'Gold', 26),
('Line Highlights', 'Perfecting a street line requires focus, creativity, and adaptation. Each block presents new challenges and opportunities. Practicing repeatedly, analyzing failures, and refining technique are essential. Capturing runs on video helps improve and share the craft.', 'aj0g_YW7PWg', 'Silver', 26),
('Olympic Mindset', 'Representing Brazil on the world stage.', 'l_ThSx3XPug', 'Bronze', 27),
('Skate Like a Girl', 'Empowering young female skaters is about representation, mentorship, and opportunity. Encouraging participation breaks barriers and fosters a more inclusive community. Teaching skills, sharing experiences, and creating supportive spaces inspires growth and confidence.', '6MLbh3j2d-w', 'Gold', 27),
('Trick Origins', 'How I invented the kickflip.', '/images/posts/55_kickflip.jpg', 'Gold', 28),
('Thoughts on Creativity', 'Innovation comes from curiosity, experimentation, and persistence. Every trick begins as an idea, honed through practice and adaptation. Creativity in skating is about problem-solving, expression, and pushing the boundaries of what is possible. Sharing knowledge and inspiring others is equally important.', NULL, 'Bronze', 28);

INSERT INTO post (post_title, post_text, post_content, post_tier, post_author) 
VALUES
('Vertical Limits', 'Exploring new walls and routes that push mental and physical boundaries. Climbing teaches patience, precision, and courage.', 'B76ysGuyi7M', 'Gold', 9),
('Raging Rapids', 'Navigating wild rivers demands adaptability and complete focus. Every rapid challenges balance, strength, and intuition.', '3b73fZW0sxM', 'Gold', 18),
('Urban Precision', 'Trial biking through the city keeps creativity flowing—every obstacle is an opportunity for control and style.', 'B76ysGuyi7M', 'Gold', 13),
('Ocean Pulse', 'Surfing massive waves is equal parts respect and instinct. Every session reminds me of nature''s raw power and beauty.', '-JzIReiJqRM', 'Gold', 3),
('Limitless Grip', 'Climbing is not about power—it''s about precision, calmness, and connection to the rock.', 'FOH_HNwRjK0', 'Gold', 12),
('Trail Vision', 'Racing downhill requires laser focus and trust in your line. It''s a battle between control and chaos.', 'F5qm0le2r4A', 'Gold', 14),
('Legacy Air', 'Skateboarding has evolved, but the thrill of flying high never fades. Every ramp tells a story.', 'A8rijjG_Cv4', 'Gold', 25),
('Mountain Flight', 'Wingsuiting transforms the mountains into a playground of air currents and cliffs—freedom with precision.', 'oB7nX-FT1Gs', 'Gold', 21),
('Sky Leap', 'Falling from the sky at 25,000 feet is about trust, training, and pure adrenaline.', 'q7_rAEJc5-w', 'Gold', 24),
('Desert Drift', 'Motocross in harsh environments tests endurance and technique. The dust, heat, and noise make it all worth it.', 'zfH27y7FPes', 'Gold', 27),
('Focus Point', 'The hardest routes require silence, strength, and surrender. Every move tells a story of persistence.', '9WbCtgN6jK8', 'Gold', 10);


CREATE INDEX idx_usercircle_user ON userCircle (uc_user_id);
CREATE INDEX idx_usercircle_circle ON userCircle (uc_circle_id);
CREATE INDEX idx_post_author ON post (post_author);
CREATE INDEX idx_post_date ON post (post_date DESC);























