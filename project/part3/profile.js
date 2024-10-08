const showPopup = (title, stats) => {
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-stats').innerHTML = stats; // Keep using innerHTML
    document.getElementById('popup').style.display = 'flex';
};


// Updated stats string for Cristiano Ronaldo
const showcourtois = () => {
    showPopup(
        'Thibaut Courtois',
        `
            <strong>Full Name:</strong> Thibaut Courtois<br>
            <strong>Height:</strong> 2.00 m<br>
            <strong>Weight:</strong> 96 kg<br>
            <strong>Date of Birth:</strong> 11/05/1992 <br>
            <strong>Place of Birth:</strong> Bree (Belgium)<br><br>
            Thibaut Courtois is a Belgian professional footballer who plays as a goalkeeper for Real Madrid and the Belgium national team. Known for his height, agility, and shot-stopping abilities, Courtois is considered one of the best goalkeepers in the world. He began his career at Genk before moving to Chelsea, where he won multiple Premier League titles. In 2018, he transferred to Real Madrid, helping them win several trophies, including La Liga and the UEFA Champions League. Courtois has also been a key player for Belgium, helping them achieve success in international competitions.
        `
    );
}


const showlunin = () => {
    showPopup(
        'Andriy Lunin',
        `
            <strong>Full Name:</strong> Andriy Lunin<br>
            <strong>Height:</strong> 1.90 m<br>
            <strong>Weight:</strong> 79 kg<br>
            <strong>Date of Birth:</strong> 11/02/1999<br>
            <strong>Place of Birth:</strong> Krasnograd (Ukraine)<br><br>
            Andriy Lunin is a Ukrainian professional footballer who plays as a goalkeeper for Real Madrid and the Ukraine national team. He is regarded as a promising young talent, known for his reflexes and composure. Lunin began his professional career at Dnipro Dnipropetrovsk and later moved to Zorya Luhansk. In 2018, he joined Real Madrid but has spent time on loan at various clubs, including Leganés, Valladolid, and Oviedo, to gain experience. Despite limited first-team appearances for Madrid due to the presence of Thibaut Courtois, Lunin is seen as a strong backup and a future star.
        `
    );
}


const showcarvajal = () => {
    showPopup(
        'Dani Carvajal',
        `
            <strong>Full Name:</strong> Daniel Carvajal Ramos<br>
            <strong>Height:</strong> 1.73 m<br>
            <strong>Weight:</strong> 73.5 kg<br>
            <strong>Date of Birth:</strong> 11/01/1992<br>
            <strong>Place of Birth:</strong>Leganés (Madrid)<br><br>
            Dani Carvajal is a Spanish professional footballer who plays as a right-back for Real Madrid and the Spain national team. Known for his defensive solidity, stamina, and ability to contribute to attacks, Carvajal has been a key player for both club and country. A product of Real Madrid's youth academy, he briefly played for Bayer Leverkusen in Germany before returning to Madrid in 2013. Since then, he has won numerous titles with Real Madrid, including multiple UEFA Champions League and La Liga trophies. Carvajal is also a regular for Spain, representing them in major international tournaments like the World Cup and European Championships.
        `
    );
}

const showmilitao = () => {
    showPopup(
        'Éder Militão',
        `
            <strong>Full Name:</strong> Éder Gabriel Militão<br>
            <strong>Height:</strong> 1.86 m<br>
            <strong>Weight:</strong> 78 kg<br>
            <strong>Date of Birth:</strong> 18/01/1998<br>
            <strong>Place of Birth:</strong>Sertãozinho (Brazil)<br><br>
            Éder Militão is a Brazilian professional footballer who plays as a central defender for Real Madrid and the Brazil national team. Known for his versatility, physicality, and strong defensive skills, Militão can play both as a center-back and a right-back. He began his career at São Paulo before moving to FC Porto in Portugal, where his performances earned him a transfer to Real Madrid in 2019.At Real Madrid, Militão has established himself as a key defender, contributing to the club's success in La Liga and the UEFA Champions League. He is also a regular in Brazil’s national team, having played in major tournaments like the Copa América and World Cup.
        `
    );
}


const showalaba = () => {
    showPopup(
        'David Alaba',
        `
            <strong>Full Name:</strong> David Alaba<br>
            <strong>Height:</strong> 1.80 m<br>
            <strong>Weight:</strong> 78 kg<br>
            <strong>Date of Birth:</strong> 24/06/1992<br>
            <strong>Place of Birth:</strong>Viena (Austria)<br><br>
            David Alaba is an Austrian professional footballer who plays as a versatile defender for Real Madrid and the Austria national team. He is known for his technical ability, leadership, and versatility, capable of playing as a center-back, left-back, or even in midfield. Alaba began his career at Bayern Munich, where he spent over a decade and won numerous titles, including multiple Bundesliga championships and UEFA Champions League trophies.In 2021, he joined Real Madrid, where he quickly became a key figure in their defense, helping the team win La Liga and the Champions League. Alaba is also the captain of the Austria national team and has been one of their standout players for many years.
        `
    );
}


const showVazquez = () => {
    showPopup(
        'Lucas Vázquez',
        `
            <strong>Full Name:</strong> Lucas Vázquez Iglesias<br>
            <strong>Height:</strong> 1.73 m<br>
            <strong>Weight:</strong> 70.5 kg<br>
            <strong>Date of Birth:</strong> 01/07/1991<br>
            <strong>Place of Birth:</strong>Curtis (A Coruña)<br><br>
            Lucas Vázquez is a Spanish professional footballer who plays as a winger and sometimes as a right-back for Real Madrid. Known for his work rate, versatility, and ability to provide assists, Vázquez is a key squad player who contributes both offensively and defensively. A product of Real Madrid’s youth academy, he initially played for Espanyol before returning to Madrid in 2015.At Real Madrid, Vázquez has won several major titles, including La Liga and the UEFA Champions League. His adaptability has allowed him to be deployed in various positions, often filling in at right-back when needed. 
        `
    );
}

const showVallejo = () => {
    showPopup(
        'Vallejo',
        `
            <strong>Full Name:</strong> Jesús Vallejo Lázaro<br>
            <strong>Height:</strong> 1.84 m<br>
            <strong>Weight:</strong> 79 kg<br>
            <strong>Date of Birth:</strong> 05/01/1997<br>
            <strong>Place of Birth:</strong>Zaragoza<br><br>
            Jesús Vallejo is a Spanish professional footballer who plays as a central defender for Real Madrid. Known for his strong aerial ability, tackling, and positional awareness, Vallejo is considered a promising young talent in Spanish football. He began his career at Real Zaragoza, where he gained recognition for his performances in the Segunda División.In 2015, Vallejo joined Real Madrid and was initially loaned to various clubs, including Eintracht Frankfurt, where he helped the team win the DFB-Pokal. After returning to Madrid, he has had limited first-team opportunities but remains a part of the squad. Vallejo has also represented Spain at various youth levels, showcasing his potential on the international stage.
        `
    );
}


const showfrangarcia = () => {
    showPopup(
        'Fran García',
        `
            <strong>Full Name:</strong> Francisco José García Torres<br>
            <strong>Height:</strong> 1.69 m<br>
            <strong>Weight:</strong> 63 kg<br>
            <strong>Date of Birth:</strong> 14/08/1999<br>
            <strong>Place of Birth:</strong>Bolaños de Calatrava (Ciudad Real)<br><br>
            Fran García is a Spanish professional footballer who plays as a left-back for Real Madrid. He began his career in the youth ranks of Madrid before moving to Rayo Vallecano, where he made a name for himself with solid performances in La Liga. After a successful stint at Rayo, he returned to Real Madrid in 2023.García is known for his pace, defensive skills, and ability to contribute to attacking play, making him a well-rounded full-back. His return to Real Madrid reflects the club's interest in developing young talents, and he is seen as a player with a promising future in both club and international football.
        `
    );
}


const showrüdiger = () => {
    showPopup(
        'Antonio Rüdiger',
        `
            <strong>Full Name:</strong> Antonio Rüdiger<br>
            <strong>Height:</strong> 1.90 m<br>
            <strong>Weight:</strong> 86 kg<br>
            <strong>Date of Birth:</strong> 03/03/1993<br>
            <strong>Place of Birth:</strong>Berlin (Germany)<br><br>
            Antonio Rüdiger is a German professional footballer who plays as a central defender for Real Madrid and the Germany national team. Known for his physicality, speed, and strong defensive skills, Rüdiger is a key player in any defensive setup. He began his professional career at VfB Stuttgart before moving to Roma in Italy, where he gained recognition for his performances.In 2017, Rüdiger signed with Chelsea in the English Premier League, where he played a significant role in the team's success, including winning the UEFA Champions League in 2021. In 2022, he transferred to Real Madrid, further establishing himself as one of the top defenders in European football. Rüdiger has also been an important player for the German national team, participating in major international tournaments like the World Cup and the UEFA European Championship.
        `
    );
}

const showmendy = () => {
    showPopup(
        'Ferland Mendy',
        `
            <strong>Full Name:</strong> Ferland Mendyr<br>
            <strong>Height:</strong> 1.80 m<br>
            <strong>Weight:</strong> 73 kg<br>
            <strong>Date of Birth:</strong> 08/06/1995<br>
            <strong>Place of Birth:</strong>Meulan-en-Yvelines (France)<br><br>
            Ferland Mendy is a French professional footballer who plays as a left-back for Real Madrid and the France national team. Known for his athleticism, defensive prowess, and ability to contribute to the attack, Mendy has become an integral part of Real Madrid's defense since joining the club.Mendy began his professional career at Le Havre before moving to Lyon, where he gained recognition for his performances in Ligue 1. In 2019, he signed with Real Madrid, quickly establishing himself as a key player in their lineup. He has helped the team secure several titles, including La Liga and the UEFA Champions League. Mendy has also represented France at various levels and was part of the squad for major tournaments, including the UEFA European Championship.
        `
    );
}


const showbellingham = () => {
    showPopup(
        'Jude Bellingham',
        `
            <strong>Full Name:</strong> Jude Bellingham<br>
            <strong>Height:</strong> 1.86 m<br>
            <strong>Weight:</strong> 75 kg<br>
            <strong>Date of Birth:</strong> 29/06/2003<br>
            <strong>Place of Birth:</strong>Stourbridge (England)<br><br>
            Jude Bellingham is an English professional footballer who plays as a midfielder for Real Madrid and the England national team. He is widely regarded as one of the brightest young talents in football, known for his technical skills, vision, and ability to control the game.Bellingham began his career at Birmingham City, where he made his professional debut at just 16 years old. His impressive performances caught the attention of Borussia Dortmund, and he signed with the German club in 2020. During his time in Dortmund, Bellingham developed significantly, becoming a key player and earning praise for his maturity on the pitch.In 2023, Bellingham transferred to Real Madrid, where he quickly made an impact, contributing both offensively and defensively. He has also been an important member of the England national team, representing his country in major tournaments such as the UEFA European Championship and the FIFA World Cup.
        `
    );
}


const showcamavinga = () => {
    showPopup(
        'Eduardo Camavinga',
        `
            <strong>Full Name:</strong> Eduardo Camavinga<br>
            <strong>Height:</strong> 1.85 m<br>
            <strong>Weight:</strong> 77 kg<br>
            <strong>Date of Birth:</strong> 10/11/2002<br>
            <strong>Place of Birth:</strong>Cabinda (Angola)<br><br>
            Eduardo Camavinga is a French professional footballer who plays as a midfielder for Real Madrid and the France national team. Born on November 10, 2002, he is known for his exceptional technical skills, versatility, and composure under pressure, making him one of the most promising young talents in football.Camavinga began his professional career at Rennes, where he made his debut at just 16 years old. His impressive performances in Ligue 1 attracted the attention of major clubs, and in 2021, he signed with Real Madrid. Since joining the club, Camavinga has played an important role, contributing to the team's successes in both domestic and international competitions, including La Liga and the UEFA Champions League.
        `
    );
}

const showvalverde = () => {
    showPopup(
        'Federico Valverde',
        `
            <strong>Full Name:</strong> Federico Santiago Valverde Dipetta<br>
            <strong>Height:</strong> 1.82 m<br>
            <strong>Weight:</strong> 78 kg<br>
            <strong>Date of Birth:</strong> 22/07/1998<br>
            <strong>Place of Birth:</strong>Montevideo (Uruguay)<br><br>
            Federico Valverde is a Uruguayan professional footballer who plays as a midfielder for Real Madrid and the Uruguay national team. Born on July 22, 1998, Valverde is known for his energy, versatility, and technical ability, making him a key player in both defensive and attacking roles.Valverde began his career at Peñarol in Uruguay before moving to Real Madrid in 2016. He initially played for the club's B team but quickly progressed to the first team due to his impressive performances. Since then, Valverde has established himself as a crucial part of Real Madrid’s midfield, contributing to the team's successes in La Liga and the UEFA Champions League.His ability to cover ground, make key tackles, and support attacks has made him a standout player in both club and international football.`
    );
}


const showmodric = () => {
    showPopup(
        'Luka Modric',
        `
            <strong>Full Name:</strong> Federico Santiago Valverde Dipetta<br>
            <strong>Height:</strong> 1.72 m<br>
            <strong>Weight:</strong> 66.2 kg<br>
            <strong>Date of Birth:</strong> 09/09/1985<br>
            <strong>Place of Birth:</strong>Zadar (Croatia)<br><br>
            Luka Modrić is a Croatian professional footballer who plays as a midfielder for Real Madrid and the Croatia national team. Born on September 9, 1985, Modrić is widely regarded as one of the best midfielders of his generation, known for his exceptional passing, vision, dribbling skills, and ability to control the tempo of the game.In 2018, Modrić won the prestigious Ballon d'Or, breaking the decade-long dominance of Lionel Messi and Cristiano Ronaldo. He has also led the Croatia national team to significant achievements, including reaching the final of the 2018 FIFA World Cup, where they finished as runners-up. Modrić's leadership, experience, and skill have made him a vital player for both club and country.
        `
    );
}

const showtchouameni = () => {
    showPopup(
        'Aurélien Tchouaméni',
        `
            <strong>Full Name:</strong> Aurélien Tchouaméni<br>
            <strong>Height:</strong> 1.87 m<br>
            <strong>Weight:</strong> 81 kg<br>
            <strong>Date of Birth:</strong> 27/01/2000<br>
            <strong>Place of Birth:</strong>Rouen (France)<br><br>
            Aurélien Tchouaméni is a French professional footballer who plays as a defensive midfielder for Real Madrid and the France national team. Born on January 27, 2000, Tchouaméni is known for his physical presence, technical ability, and intelligence on the field, making him a key player in both defensive and transitional play.At Real Madrid, Tchouaméni has quickly become an integral part of the midfield, contributing to the team's successes in domestic and international competitions. He has also been a prominent member of the French national team. His ability to break up play, distribute the ball effectively, and contribute to the attack has made him a valuable asset for both club and country.
        `
    );
}

const showguler = () => {
    showPopup(
        'Arda Güler',
        `
            <strong>Full Name:</strong> Arda Güler<br>
            <strong>Height:</strong> 1.75 m<br>
            <strong>Weight:</strong> 70 kg<br>
            <strong>Date of Birth:</strong> 25/02/2005<br>
            <strong>Place of Birth:</strong>Ankara (Turkey)<br><br>
            Arda Güler is a Turkish professional footballer who plays as an attacking midfielder for Real Madrid and the Turkey national team. Born on February 25, 2005, Güler is recognized for his exceptional technical skills, creativity, and vision on the field, which make him a promising young talent in football.Güler began his career at Fenerbahçe, where he made his professional debut at a young age, showcasing his potential in Turkish football. His performances caught the attention of clubs across Europe, leading to a transfer to Real Madrid in 2023.As a member of Real Madrid, Güler is expected to develop further under the club's elite coaching and training environment. He has also represented Turkey at various youth levels and is seen as a future star for the national team. His ability to play in various attacking roles and create scoring opportunities makes him an exciting prospect in the world of football.
        `
    );
}


const showceballos = () => {
    showPopup(
        'Dani Ceballos',
        `
            <strong>Full Name:</strong> Daniel Ceballos Fernández<br>
            <strong>Height:</strong> 1.79 m<br>
            <strong>Weight:</strong> 70.5 kg<br>
            <strong>Date of Birth:</strong> 07/08/1996<br>
            <strong>Place of Birth:</strong>Utrera (Sevilla)<br><br>
            Dani Ceballos is a Spanish professional footballer who plays as a midfielder for Real Madrid and the Spain national team. Born on August 7, 1996, Ceballos is known for his technical ability, creativity, and vision, making him a key playmaker in the midfield.To gain more experience, he had loan spells at Arsenal, where he contributed to the team's success in domestic competitions.Since returning to Real Madrid, Ceballos has played a more prominent role, especially with his ability to dictate play and create chances for his teammates. He has represented Spain at various youth levels and was part of the senior national team. Ceballos's skill set and versatility make him a valuable asset for both club and country.
        `
    );
}

const showvini = () => {
    showPopup(
        'Vinicius Junior',
        `
            <strong>Full Name:</strong> Vinicius Paixao de Oliveira Junior<br>
            <strong>Height:</strong> 1.76 m<br>
            <strong>Weight:</strong> 73 kg<br>
            <strong>Date of Birth:</strong> 12/07/2000<br>
            <strong>Place of Birth:</strong>São Gonçalo (Río de Janeiro, Brazil)<br><br>
            Vinícius Júnior is a Brazilian professional footballer who plays as a winger for Real Madrid and the Brazil national team. Born on July 12, 2000, he is known for his incredible speed, dribbling ability, and flair, making him one of the most exciting young talents in world football.Vinícius began his career at Flamengo, where he made his professional debut at the age of 16. His performances quickly drew attention, leading to a transfer to Real Madrid in 2018. After initially facing challenges in adapting to European football, he developed significantly and became a key player for the club.At Real Madrid, Vinícius has been instrumental in the team's success, contributing to their titles in La Liga and the UEFA Champions League. His dynamic playing style, ability to take on defenders, and knack for scoring crucial goals have made him a fan favorite. On the international stage, he has represented Brazil in major tournaments, showcasing his talent as part of the national team. Vinícius's potential and skill make him a standout player in contemporary football.
        `
    );
}


const showmbappe = () => {
    showPopup(
        'Kylian Mbappé',
        `
            <strong>Full Name:</strong> Kylian Mbappé<br>
            <strong>Height:</strong> 1.78 m<br>
            <strong>Weight:</strong> 75 kg<br>
            <strong>Date of Birth:</strong> 20/12/1998<br>
            <strong>Place of Birth:</strong>París (Francia)<br><br>
            Kylian Mbappé is a French professional footballer who plays as a forward for Real Madrid and the France national team. Born on December 20, 1998, in Bondy, France, he is known for his exceptional speed, dribbling skills, and goal-scoring ability, making him one of the most talented players in the world.Mbappé began his professional career at AS Monaco, where he gained international attention for his performances in Ligue 1 and the UEFA Champions League. His standout season in 2016-2017 helped Monaco win the Ligue 1 title and reach the semifinals of the Champions League. In 2017, he transferred to Paris Saint-Germain (PSG) for a reported fee of around €180 million, making him the second-most expensive player in history at the time.He has also been a key player for the French national team, helping them win the 2018 FIFA World Cup and finishing as a runner-up in the 2022 World Cup.Mbappé is celebrated for his electrifying playing style, combining speed and technical skill, which allows him to create scoring opportunities and score goals. His potential and achievements have positioned him as one of the leading figures in modern football.
        `
    );
}


const showrodrygo = () => {
    showPopup(
        'Rodrygo',
        `
            <strong>Full Name:</strong> Rodrygo Goes<br>
            <strong>Height:</strong> 1.74 m<br>
            <strong>Weight:</strong> 64 kg<br>
            <strong>Date of Birth:</strong> 09/01/2001<br>
            <strong>Place of Birth:</strong>Osasco (Brasil)<br><br>
            Rodrygo Goes, commonly known as Rodrygo, is a Brazilian professional footballer who plays as a winger for Real Madrid and the Brazil national team. Born on January 9, 2001, in Osasco, Brazil, he is recognized for his pace, dribbling ability, and skillful attacking play.Rodrygo began his career at Santos FC, where he made his professional debut at the age of 16. His impressive performances in Brazil attracted the attention of European clubs, leading to a transfer to Real Madrid in 2019. He initially joined the club's B team, but his talent quickly earned him a place in the first team.At Real Madrid, Rodrygo has showcased his potential, contributing significantly to the team's successes in domestic and international competitions, including La Liga and the UEFA Champions League. He is known for his ability to score crucial goals and provide assists, often coming through in important matches.Rodrygo has also represented Brazil at various youth levels and made his senior debut in 2021, participating in major tournaments such as the Copa América. His combination of skill, speed, and determination makes him an exciting prospect in the world of football.
        `
    );
}

const showendrick = () => {
    showPopup(
        'Endrick',
        `
            <strong>Full Name:</strong>Endrick Felipe Moreira de Sousa<br>
            <strong>Height:</strong> 1.73 m<br>
            <strong>Weight:</strong> 67 kg<br>
            <strong>Date of Birth:</strong> 21/07/2006<br>
            <strong>Place of Birth:</strong>Brasilia<br><br>
            Endrick is a Brazilian professional footballer who plays as a forward. Born on Endrick Felipe Moreira de Sousa on July 21, 2006, in Brasilia, Brazil, he is considered one of the most promising young talents in football. Known for his exceptional dribbling, speed, and goal-scoring ability, Endrick has drawn comparisons to some of the sport's top players.Endrick began his career at Palmeiras, where he made headlines for his performances in youth competitions and quickly rose through the ranks. His skill on the ball and ability to impact games at a young age attracted the attention of top European clubs. In December 2022, he signed with Real Madrid, and he is expected to join the club in 2024 when he turns 18.Despite his young age, Endrick has already represented Brazil at various youth levels and is seen as a key part of the country's future in international football. His potential and playing style have generated significant excitement among fans and analysts alike.
        `
    );
}


const showbrahim = () => {
    showPopup(
        'Brahim Díaz',
        `
            <strong>Full Name:</strong>Brahim Díaz<br>
            <strong>Height:</strong> 1.70 m<br>
            <strong>Weight:</strong> 68 kg<br>
            <strong>Date of Birth:</strong> 03/08/1999<br>
            <strong>Place of Birth:</strong>Malaga<br><br>
            Brahim Díaz is a Spanish professional footballer who plays as an attacking midfielder or winger. Born on August 3, 1999, in Málaga, Spain, he is known for his technical skills, creativity, and ability to dribble past defenders.Díaz began his career at Manchester City, where he joined the youth academy and made his professional debut in 2016. After gaining valuable experience and recognition, he transferred to Real Madrid in January 2019. At Madrid, he faced competition for playing time, which led to loan spells to help him gain more experience.In the 2020-2021 season, he was loaned to AC Milan, where he became an important player, contributing significantly to the team's successes in Serie A. His performances at Milan have highlighted his potential and skill on a larger stage.Upon returning to Real Madrid, Díaz aimed to establish himself within the first-team setup. He is known for his dribbling ability, creativity, and vision, which make him a valuable asset in attacking positions. His time at Real Madrid has been marked by his development as a player, and he is seen as a promising talent for the future.
        `
    );
}


const showcarlo = () => {
    showPopup(
        'Carlo Ancelotti',
        `
            <strong>Full Name:</strong>Carlo Ancelotti<br>
            <strong>Height:</strong> 1.77 m<br>
            <strong>Weight:</strong> 73 kg<br>
            <strong>Date of Birth:</strong> 10/06/1959<br>
            <strong>Place of Birth:</strong>Reggiolo<br><br>
            Carlo Ancelotti is an Italian football manager and former professional player, widely regarded as one of the greatest coaches in football history. Born on June 10, 1959, in Reggiolo, Italy, Ancelotti had a successful playing career as a midfielder before transitioning to management.Ancelotti began his managerial career in the late 1990s and has since managed several top clubs, including AC Milan, Chelsea, Paris Saint-Germain, Real Madrid, and Bayern Munich. He is known for his tactical flexibility, ability to adapt to different playing styles, and strong leadership skills.He is particularly noted for his time at AC Milan, where he won the Champions League twice (2003 and 2007), and at Real Madrid, where he secured the coveted "La Decima" in 2014, marking the club's tenth European title. Ancelotti returned to Real Madrid in June 2021, leading the team to further successes, including the La Liga and UEFA Champions League titles in the 2021-2022 season.Ancelotti is respected for his ability to manage high-profile players and create strong team dynamics. His calm demeanor and extensive knowledge of the game have made him a beloved figure in football.
        `
    );
}

const showDavide = () => {
    showPopup(
        'Davide Ancelotti',
        `
            <strong>Full Name:</strong>Davide Ancelotti<br>
            <strong>Height:</strong> 1.78 m<br>
            <strong>Date of Birth:</strong> 22/07/1989<br>
            <strong>Place of Birth:</strong>Parma (Italy)<br><br>
            Davide Ancelotti is an Italian football coach and the son of renowned manager Carlo Ancelotti. Born on July 21, 1989, in Reggiolo, Italy, Davide has followed in his father's footsteps and is making a name for himself in the world of football management.He began his coaching career as an assistant coach under his father at various clubs, including Bayern Munich and Napoli. In 2021, he joined Carlo Ancelotti's staff at Real Madrid as an assistant coach when his father returned to the club.Davide is known for his tactical acumen and understanding of the game, having learned from one of the best in the business. His involvement in top clubs and experience working alongside his father have positioned him as a promising coach in his own right, with aspirations of furthering his career in football management.
        `
    );
}


const closePopup = () => {
    document.getElementById('popup').style.display = 'none';
};

