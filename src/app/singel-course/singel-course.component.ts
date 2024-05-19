import { Component, OnInit } from '@angular/core';
import { RelatedCoursesComponent } from '../shared/related-courses/related-courses.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-singel-course',
  templateUrl: './singel-course.component.html',
  styleUrls: ['./singel-course.component.scss']
})
export class SingelCourseComponent implements OnInit{
    coursesRelated:any[]=[];
coursesName:any;
coursesId:any;
    mathematics:any[]=
[
  {
    id: '1',
    cover: '../../assets/images/courses/math/1.jpg',
    courseName: 'Introduction to Mathematical Thinking',
    constractor: 'mohmed saad',
    des: `Learn how to think the way mathematicians do  a powerful cognitive process developed over thousands of years.

    Mathematical thinking is not the same as doing mathematics – at least not as mathematics is typically presented in our school system. School math typically focuses on learning procedures to solve highly stereotyped problems. Professional mathematicians think a certain way to solve real problems, problems that can arise from the everyday world, or from science, or from within mathematics itself. The key to success in school math is to learn to think inside-the-box. In contrast, a key feature of mathematical thinking is thinking outside-the-box – a valuable ability in today’s world. This course helps to develop that crucial way of thinking.`,
    rate: '4',
  },
  {
    id: '2',
    cover: '../../assets/images/courses/math/3.jpg',
    courseName: 'Introduction to Calculus',
    constractor: 'kareem mohmed',
    des: `The focus and themes of the Introduction to Calculus course address the most important foundations for applications of mathematics in science, engineering and commerce. The course emphasises the key ideas and historical motivation for calculus, while at the same time striking a balance between theory and application, leading to a mastery of key threshold concepts in foundational mathematics.`,
    rate: '4.9',
  },
  {
    id: '3',
    cover: '../../assets/images/courses/math/2.jpg',
    courseName: 'Calculus: Single Variable Part 1 - Functions',
    constractor: ' mohmed omar',
    des: `Calculus is one of the grandest achievements of human thought, explaining everything from planetary orbits to the optimal size of a city to the periodicity of a heartbeat. This brisk course covers the core ideas of single-variable Calculus with emphases on conceptual understanding and applications. The course is ideal for students beginning  .`,
    rate: '4.5',
  },
  {
    id: '4',
    cover: '../../assets/images/courses/math/maxresdefault.jpg',
    courseName: 'Pre-Calculus',
    constractor: ' sayed hassen',
    des: `A course designed to ease students into first-semester calculus courses for almost any undergraduate degree, with a particular emphasis on science and engineering.`,
    rate: '4.7',
  },
]
English:any[]=
[
  {
    id: '1',
    cover: '../../assets/images/courses/english/1.png',
    courseName: 'Learn English: Beginning Grammar Specialization',
    constractor: 'khaled saad',
    des: `Learn in-demand skills from university and industry experts,
    Master a subject or tool with hands-on projects,
    Develop a deep understanding of key concepts`,
    rate: '4.2',
  },
  {
    id: '2',
    cover: '../../assets/images/courses/english/2.png',
    courseName: 'Training and Practicing in English Public Speaking',
    constractor: 'kareem ahmed',
    des: `Professor Zhang is Central South University’s top training coach in English speaking and interpreting contests and has engaged in teaching and research on English speaking and interpreting as well as competition training for more than ten years.`,
    rate: '4.8',
  },
  {
    id: '3',
    cover: '../../assets/images/courses/english/3.jpg',
    courseName: 'English Composition I',
    constractor: ' mohmed omar',
    des: `You will gain a foundation for college-level writing valuable for nearly any field. Students will learn how to read carefully, write effective arguments, understand the writing process, engage with others' ideas, cite accurately, and craft powerful prose.`,
    rate: '4.4',
  },
  {
    id: '4',
    cover: '../../assets/images/courses/english/4.png',
    courseName: 'Improve Your English Communication Skills Specialization',
    constractor: ' sayed hassen',
    des: `This Specialization helps you improve your professional communication in English for successful business interactions. Each course focuses on a particular area of communication in English:  writing emails, speaking at meetings and interviews, giving presentations, and networking online. Whether you want to communicate to potential employers, `,
    rate: '4.7',
  },
]
programing:any[]=
[
  {
    id: '1',
    cover: '../../assets/images/courses/programing/1.jpg',
    courseName: 'Programming for Everybody (Getting Started with Python)',
    constractor: 'khaled saad',
    des: `This course aims to teach everyone the basics of programming computers using Python. We cover the basics of how one constructs a program from a series of simple instructions in Python.  The course has no pre-requisites and avoids all but the simplest mathematics. Anyone with moderate computer experience should be able to master the materials in this `,
    rate: '4.2',
  },
  {
    id: '2',
    cover: '../../assets/images/courses/programing/2.jpg',
    courseName: 'Introduction to Computer Programming',
    constractor: 'kareem ahmed',
    des: `This MOOC provides you with the foundational skill set required to write computer programs. If you are interested in learning how to write interactive, graphical programs from an introductory level in a real programming language, this is the course for you. You will begin by learning the basics of editing and running programs.`,
    rate: '4.8',
  },
  {
    id: '3',
    cover: '../../assets/images/courses/programing/3.jpg',
    courseName: 'Python 3 Programming Specialization',
    constractor: ' mohmed omar',
    des: `This specialization teaches the fundamentals of programming in Python 3. We will begin at the beginning, with variables, conditionals, and loops, and get to some intermediate material like keyword parameters, list comprehensions, lambda expressions, and class inheritance.`,
    rate: '4.4',
  },
  {
    id: '4',
    cover: '../../assets/images/courses/programing/4.jpg',
    courseName: 'Object Oriented Programming',
    constractor: ' sayed hassen',
    des: `In this 5-course specialisation, you will develop various C++ programming skills. Rather than building many small programs as you will in other courses, we have taken a different approach: you will create a single, extensive program through the five courses. The program will be a simplified cryptocurrency exchange platform. We will cover the`,
    rate: '4.7',
  },
]
    allCourses:any[]=[  
        {
            "English":[
                {
                    "id":1,
                    "productsName": "Learn English: Beginning Grammar Specialization",
                    "productsAbout": "This specialization is designed for individuals who are at the early stages of learning the English language and want to build a strong foundation in grammar. The course focuses on fundamental grammar concepts to help students communicate effectively in both spoken and written English. The curriculum is structured to provide a gradual progression from basic to more complex grammatical structures.",
                    "levelName": "Basic",
                    "level": "70",
                    "instructor":"Khaled Saad",
                    "rate": null,
                    "coverPath": '../../assets/images/courses/english/1.png',
                    "duration": "00:51:02",
                    "videoCount": 18,
                    "expectedTimeCompletion": 3,
                    "createdIn": "2023-07-30T18:42:00",
                    "totalQuizes": 2,
                    "link":"https://www.coursera.org/specializations/learn-english-beginning-grammar?utm_medium=sem&utm_source=gg&utm_campaign=B2C_EMEA__coursera_FTCOF_courseraplus&campaignid=20858197888&adgroupid=156245795749&device=c&keyword=coursera&matchtype=e&network=g&devicemodel=&adposition=&creativeid=684297719990&hide_mobile_promo=&term=%7Bterm%7D&gad_source=1&gclid=CjwKCAjwrvyxBhAbEiwAEg_KghYozjEK0kx39eGnQaPVD0iiGuUWB3vJUvrn8dS0N78cu4WxbaSJRxoCFrgQAvD_BwE",
                    "objectives": [
                        {
                            "id": "5DA95507-B2A7-4692-8CB5-6FC32F336C63",
                            "Text1": "Introduction to Parts of Speech."
                        },
                        {
                            "id": "1DB4812A-4341-41CD-8412-828B723CAA56",
                            "Text1": "Sentence Structure."
                        },
                        {
                            "id": "B175059B-EC5C-4E2F-B302-9D2F2F27AB87",
                            "Text1": "Tenses and Verb Conjugation."
                        },
                        {
                            "id": "7669076B-9A82-4642-8F3F-CC0AD4E697C5",
                            "Text1": "Articles and Pronouns."
                        },
                        {
                            "id": "3AB01AC0-B2E9-4065-8C02-AB9550C2B142",
                            "Text1": "Basic Sentence Construction."
                        },
                        {
                            "id": "E70E2AF4-B619-40CA-BF8C-333543CE8CB0",
                            "Text1": "Common Mistakes and Pitfalls."
                        }
                    ],
                    "skills": [
                        {
                            "id": "00A7E42D-5F58-41A6-B32E-2F380129DC6C",
                            "Text1": "Understanding Parts of Speech"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Sentence Structure"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Tense Usage"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Articles and Pronouns"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Common Grammar Pitfalls"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Listening Comprehension"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Reading Comprehension"
                        }
                    ],
                
                    "instructorInfo": [
                        {
                            "id": "C26E3520-8209-47D4-9101-621C7D3A2412",
                            "fName": "Khaled ",
                            "lName": "Saad",
                            "profilePhoto": "https://firebasestorage.googleapis.com/v0/b/zedny-eg.appspot.com/o/UserProfile%2FAvatar.png?alt=media&token=e88247b1-2cdc-457d-826f-dd9c2b0aa5b6",
                            "rate": 4.0000,
                            "courses": 2,
                            "students": 18112077
                        }
                    ], 
                },
                {
                    "id":2,
                    "productsName": "Training and Practicing in English Public Speaking",
                    "productsAbout": "This course is designed to enhance students' proficiency and confidence in English public speaking. Effective communication is a crucial skill in various professional and personal settings, and this course aims to provide students with the necessary tools and techniques to become articulate and persuasive speakers.",
                    "levelName": "Basic",
                    "level": "80",
                    "instructor":"Kareem Ahmed",
                    "rate": null,
                    "coverPath": '../../assets/images/courses/english/2.png',
                    "duration": "00:41:02",
                    "videoCount": 16,
                    "expectedTimeCompletion": 4,
                    "createdIn": "2023-07-30T18:42:00",
                    "totalQuizes": 4,
                    "link":"https://www.coursera.org/learn/enpublicspeaking?utm_medium=sem&utm_source=gg&utm_campaign=B2C_EMEA__coursera_FTCOF_courseraplus&campaignid=20858197888&adgroupid=156245795749&device=c&keyword=coursera&matchtype=e&network=g&devicemodel=&adposition=&creativeid=684297719990&hide_mobile_promo=&term=%7Bterm%7D&gad_source=1&gclid=CjwKCAjwrvyxBhAbEiwAEg_KghYozjEK0kx39eGnQaPVD0iiGuUWB3vJUvrn8dS0N78cu4WxbaSJRxoCFrgQAvD_BwE",
                    "objectives": [
                        {
                            "id": "5DA95507-B2A7-4692-8CB5-6FC32F336C63",
                            "Text1": "Speech Preparation and Organization"
                        },
                        {
                            "id": "1DB4812A-4341-41CD-8412-828B723CAA56",
                            "Text1": "Audience Analysis"
                        },
                        {
                            "id": "B175059B-EC5C-4E2F-B302-9D2F2F27AB87",
                            "Text1": "Delivery Techniques"
                        },
                        {
                            "id": "7669076B-9A82-4642-8F3F-CC0AD4E697C5",
                            "Text1": "Effective Use of Visual Aids"
                        },
                        {
                            "id": "3AB01AC0-B2E9-4065-8C02-AB9550C2B142",
                            "Text1": "Overcoming Anxiety and Nervousness"
                        },
                        {
                            "id": "E70E2AF4-B619-40CA-BF8C-333543CE8CB0",
                            "Text1": "Impromptu Speaking"
                        }
                    ],
                    "skills": [
                        {
                            "id": "00A7E42D-5F58-41A6-B32E-2F380129DC6C",
                            "Text1": "Speech Preparation and Organization"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Audience Analysis:"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Delivery Techniques"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Effective Use of Visual Aids"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Overcoming Anxiety and Nervousness"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Impromptu Speaking"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Group Presentation Skills"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Critical Analysis of Speeches"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Adaptability"
                        }
                    ],
                
                    "instructorInfo": [
                        {
                            "id": "C26E3520-8209-47D4-9101-621C7D3A2412",
                            "fName": "Kareem ",
                            "lName": "Ahmed",
                            "profilePhoto": "https://firebasestorage.googleapis.com/v0/b/zedny-eg.appspot.com/o/UserProfile%2FAvatar.png?alt=media&token=e88247b1-2cdc-457d-826f-dd9c2b0aa5b6",
                            "rate": 4.5,
                            "courses": 6,
                            "students": 181120
                        }
                    ], 
                },
                {
                    "id":3,
                    "productsName": "English Composition",
                    "productsAbout": "The English Composition course is designed to enhance students' writing skills, fostering the development of effective written communication in various contexts. Through a combination of theory, analysis, and practical exercises, students will refine their ability to articulate ideas clearly, coherently, and persuasively. Emphasis will be placed on mastering the fundamentals of composition, critical thinking, and the revision process.",
                    "levelName": "Basic",
                    "level": "70",
                    "instructor":"Mohmed Omar",
                    "rate": null,
                    "coverPath": '../../assets/images/courses/english/3.jpg',
                    "duration": "00:31:02",
                    "videoCount": 22,
                    "expectedTimeCompletion": 7,
                    "createdIn": "2023-07-30T18:42:00",
                    "totalQuizes": 4,
                    "link":"https://www.coursera.org/learn/english-composition?utm_medium=sem&utm_source=gg&utm_campaign=B2C_EMEA__coursera_FTCOF_courseraplus&campaignid=20858197888&adgroupid=156245795749&device=c&keyword=coursera&matchtype=e&network=g&devicemodel=&adposition=&creativeid=684297719990&hide_mobile_promo=&term=%7Bterm%7D&gad_source=1&gclid=CjwKCAjwrvyxBhAbEiwAEg_KghYozjEK0kx39eGnQaPVD0iiGuUWB3vJUvrn8dS0N78cu4WxbaSJRxoCFrgQAvD_BwE",
                    "objectives": [
                        {
                            "id": "5DA95507-B2A7-4692-8CB5-6FC32F336C63",
                            "Text1": "Grammar and Syntax."
                        },
                        {
                            "id": "1DB4812A-4341-41CD-8412-828B723CAA56",
                            "Text1": "Paragraph and Essay Structure."
                        },
                        {
                            "id": "B175059B-EC5C-4E2F-B302-9D2F2F27AB87",
                            "Text1": "Thesis Development."
                        },
                        {
                            "id": "7669076B-9A82-4642-8F3F-CC0AD4E697C5",
                            "Text1": "Research and Source Integration."
                        },
                        {
                            "id": "3AB01AC0-B2E9-4065-8C02-AB9550C2B142",
                            "Text1": "Revision and Editing."
                        },
                        {
                            "id": "E70E2AF4-B619-40CA-BF8C-333543CE8CB0",
                            "Text1": "Genre Awareness:."
                        }
                    ],
                    "skills": [
                        {
                            "id": "00A7E42D-5F58-41A6-B32E-2F380129DC6C",
                            "Text1": "Technology and Writing"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Effective Communication of Ideas"
                        }
                    ],
                
                    "instructorInfo": [
                        {
                            "id": "C26E3520-8209-47D4-9101-621C7D3A2412",
                            "fName": "Mohmed  ",
                            "lName": "Omar",
                            "profilePhoto": "https://firebasestorage.googleapis.com/v0/b/zedny-eg.appspot.com/o/UserProfile%2FAvatar.png?alt=media&token=e88247b1-2cdc-457d-826f-dd9c2b0aa5b6",
                            "rate": 4.7,
                            "courses": 10,
                            "students": 20112077
                        }
                    ], 
                },
                {
                    "id":4,
                    "productsName": "Improve Your English Communication Skills Specialization",
                    "productsAbout": "The Improve Your English Communication Skills specialization is a comprehensive program designed to enhance proficiency in English language communication across various contexts. This specialization consists of a series of courses that address different aspects of language use, including speaking, listening, writing, and overall language fluency. Through a combination of theoretical knowledge, practical exercises, and real-world applications, participants will develop the skills needed to communicate confidently and effectively in both professional and personal settings.",
                    "levelName": "Basic",
                    "level": "50",
                    "instructor":"Sayed Hassen",
                    "rate": null,
                    "coverPath": '../../assets/images/courses/english/4.png',
                    "duration": "00:31:02",
                    "videoCount": 12,
                    "expectedTimeCompletion": 1,
                    "createdIn": "2023-07-30T18:42:00",
                    "totalQuizes": 2,
                    "link":"https://www.coursera.org/specializations/improve-english?utm_medium=sem&utm_source=gg&utm_campaign=B2C_EMEA__coursera_FTCOF_courseraplus&campaignid=20858197888&adgroupid=156245795749&device=c&keyword=coursera&matchtype=e&network=g&devicemodel=&adposition=&creativeid=684297719990&hide_mobile_promo=&term=%7Bterm%7D&gad_source=1&gclid=CjwKCAjwrvyxBhAbEiwAEg_KghYozjEK0kx39eGnQaPVD0iiGuUWB3vJUvrn8dS0N78cu4WxbaSJRxoCFrgQAvD_BwE",
                    "objectives": [
                        {
                            "id": "5DA95507-B2A7-4692-8CB5-6FC32F336C63",
                            "Text1": "Language Proficiency Improvement."
                        },
                        {
                            "id": "1DB4812A-4341-41CD-8412-828B723CAA56",
                            "Text1": "Effective Communication Skills."
                        },
                        {
                            "id": "B175059B-EC5C-4E2F-B302-9D2F2F27AB87",
                            "Text1": "Professional Communication Competence."
                        },
                        {
                            "id": "7669076B-9A82-4642-8F3F-CC0AD4E697C5",
                            "Text1": "Cultural Competence."
                        },
                        {
                            "id": "3AB01AC0-B2E9-4065-8C02-AB9550C2B142",
                            "Text1": "Confidence Building."
                        }
                    ],
                    "skills": [
                        {
                            "id": "00A7E42D-5F58-41A6-B32E-2F380129DC6C",
                            "Text1": "Real-World Application"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Effective Use of Technology"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Confidence Building"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Public Speaking Confidence"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Cross-Cultural Communication"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Writing Proficiency"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Speaking Skills"
                        }
                    ],
                
                    "instructorInfo": [
                        {
                            "id": "C26E3520-8209-47D4-9101-621C7D3A2412",
                            "fName": "Sayed  ",
                            "lName": "Hassen",
                            "profilePhoto": "https://firebasestorage.googleapis.com/v0/b/zedny-eg.appspot.com/o/UserProfile%2FAvatar.png?alt=media&token=e88247b1-2cdc-457d-826f-dd9c2b0aa5b6",
                            "rate": 4.9,
                            "courses": 8,
                            "students": 18112077
                        }
                    ], 
                },
            ],
            "programing":[
                {
                    "id":1,
                    "productsName": "Programming for Everybody (Getting Started with Python)",
                    "productsAbout": "The Programming for Everybody course, also known as Getting Started with Python, is an introductory programming course designed for individuals with little or no prior programming experience. The course focuses on teaching the Python programming language as a tool for solving real-world problems and gaining essential programming skills. Through a combination of hands-on coding exercises, practical projects, and theoretical concepts, participants will acquire the foundational knowledge needed to start their journey into the world of programming",
                    "levelName": "Basic",
                    "level": "70",
                    "instructor":"Khaled Saad",
                    "rate": null,
                    "coverPath": '../../assets/images/courses/programing/1.jpg',
                    "duration": "00:51:02",
                    "videoCount": 18,
                    "expectedTimeCompletion": 3,
                    "createdIn": "2023-07-30T18:42:00",
                    "totalQuizes": 2,
                    "link":'https://www.coursera.org/learn/python?utm_medium=sem&utm_source=gg&utm_campaign=B2C_EMEA__coursera_FTCOF_courseraplus&campaignid=20858197888&adgroupid=156245795749&device=c&keyword=coursera&matchtype=e&network=g&devicemodel=&adposition=&creativeid=684297719990&hide_mobile_promo=&term=%7Bterm%7D&gad_source=1&gclid=CjwKCAjwrvyxBhAbEiwAEg_KghYozjEK0kx39eGnQaPVD0iiGuUWB3vJUvrn8dS0N78cu4WxbaSJRxoCFrgQAvD_BwE',

                    "objectives": [
                        {
                            "id": "5DA95507-B2A7-4692-8CB5-6FC32F336C63",
                            "Text1": "Introduction to Programming Concepts."
                        },
                        {
                            "id": "1DB4812A-4341-41CD-8412-828B723CAA56",
                            "Text1": "Python Language Basics."
                        },
                        {
                            "id": "B175059B-EC5C-4E2F-B302-9D2F2F27AB87",
                            "Text1": "Control Flow and Looping Structures."
                        },
                        {
                            "id": "7669076B-9A82-4642-8F3F-CC0AD4E697C5",
                            "Text1": "Functions and Modular Programming."
                        },
                        {
                            "id": "3AB01AC0-B2E9-4065-8C02-AB9550C2B142",
                            "Text1": "Data Structures in Python:."
                        },
                        {
                            "id": "E70E2AF4-B619-40CA-BF8C-333543CE8CB0",
                            "Text1": "Understanding and Using APIs."
                        }
                    ],
                    "skills": [
                        {
                            "id": "00A7E42D-5F58-41A6-B32E-2F380129DC6C",
                            "Text1": "Continuous Learning and Adaptability"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Debugging and Troubleshooting"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Problem-Solving Skills"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Data Analysis with Python"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "API Interaction"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "File Handling"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Data Structures in Python:"
                        }
                    ],
                
                    "instructorInfo": [
                        {
                            "id": "C26E3520-8209-47D4-9101-621C7D3A2412",
                            "fName": "Khaled ",
                            "lName": "Saad",
                            "profilePhoto": "https://firebasestorage.googleapis.com/v0/b/zedny-eg.appspot.com/o/UserProfile%2FAvatar.png?alt=media&token=e88247b1-2cdc-457d-826f-dd9c2b0aa5b6",
                            "rate": 4.0000,
                            "courses": 2,
                            "students": 18112077
                        }
                    ], 
                },
                {
                    "id":2,
                    "productsName": "Introduction to Computer Programming",
                    "productsAbout": "The Introduction to Computer Programming course is designed to provide participants with a comprehensive understanding of the fundamental principles and practices of computer programming. This course is tailored for individuals with little or no prior programming experience, aiming to instill a strong foundation in problem-solving, algorithmic thinking, and coding skills. Through a combination of theoretical concepts, hands-on programming exercises, and practical applications, participants will gain the essential knowledge to embark on their journey into the world of computer programming.",
                    "levelName": "Basic",
                    "level": "87",
                    "instructor":"Kareem Ahmed",
                    "rate": null,
                    "coverPath": '../../assets/images/courses/programing/2.jpg',
                    "duration": "00:41:02",
                    "videoCount": 20,
                    "expectedTimeCompletion": 6,
                    "createdIn": "2023-07-30T18:42:00",
                    "totalQuizes": 2,
                    "link":"https://www.coursera.org/learn/introduction-to-computer-programming?utm_medium=sem&utm_source=gg&utm_campaign=B2C_EMEA__coursera_FTCOF_courseraplus&campaignid=20858197888&adgroupid=156245795749&device=c&keyword=coursera&matchtype=e&network=g&devicemodel=&adposition=&creativeid=684297719990&hide_mobile_promo=&term=%7Bterm%7D&gad_source=1&gclid=CjwKCAjwrvyxBhAbEiwAEg_KghYozjEK0kx39eGnQaPVD0iiGuUWB3vJUvrn8dS0N78cu4WxbaSJRxoCFrgQAvD_BwE",
                    "objectives": [
                        {
                            "id": "5DA95507-B2A7-4692-8CB5-6FC32F336C63",
                            "Text1": "Foundations of Programming"
                        },
                        {
                            "id": "1DB4812A-4341-41CD-8412-828B723CAA56",
                            "Text1": "Introduction to Programming Languages"
                        },
                        {
                            "id": "B175059B-EC5C-4E2F-B302-9D2F2F27AB87",
                            "Text1": "Algorithmic Thinking"
                        },
                        {
                            "id": "7669076B-9A82-4642-8F3F-CC0AD4E697C5",
                            "Text1": "Programming Basics"
                        },
                        {
                            "id": "3AB01AC0-B2E9-4065-8C02-AB9550C2B142",
                            "Text1": "Functions and Modular Programming"
                        },
                        {
                            "id": "E70E2AF4-B619-40CA-BF8C-333543CE8CB0",
                            "Text1": "Data Structures"
                        }
                    ],
                    "skills": [
                        {
                            "id": "00A7E42D-5F58-41A6-B32E-2F380129DC6C",
                            "Text1": "Software Development Life Cycle (SDLC)"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Version Control and Collaboration"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Ethical and Responsible Programming"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Effective Documentation"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Creative Problem-Solving"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Algorithmic Thinking and Problem-Solving"
                        }
                    ],
                
                    "instructorInfo": [
                        {
                            "id": "C26E3520-8209-47D4-9101-621C7D3A2412",
                            "fName": "Kareem ",
                            "lName": "Ahmed",
                            "profilePhoto": "https://firebasestorage.googleapis.com/v0/b/zedny-eg.appspot.com/o/UserProfile%2FAvatar.png?alt=media&token=e88247b1-2cdc-457d-826f-dd9c2b0aa5b6",
                            "rate": 4.5,
                            "courses": 6,
                            "students": 181120
                        }
                    ], 
                },
                {
                    "id":3,
                    "productsName": "Python 3 Programming Specialization",
                    "productsAbout": "Python 3 Programming Specialization course. Specializations often consist of multiple courses that together form a comprehensive program. However, I can provide a generic course description based on what a typical Python 3 Programming Specialization might include. Keep in mind that actual course content can vary, and it's recommended to check the specific course offering for the most accurate information.",
                    "levelName": "Basic",
                    "level": "70",
                    "instructor":"Mohmed Omar",
                    "rate": null,
                    "coverPath": '../../assets/images/courses/programing/3.jpg',
                    "duration": "00:51:02",
                    "videoCount": 32,
                    "expectedTimeCompletion": 7,
                    "createdIn": "2023-07-30T18:42:00",
                    "totalQuizes": 7,
                    "link":"https://www.coursera.org/specializations/python-3-programming?utm_medium=sem&utm_source=gg&utm_campaign=B2C_EMEA__coursera_FTCOF_courseraplus&campaignid=20858197888&adgroupid=156245795749&device=c&keyword=coursera&matchtype=e&network=g&devicemodel=&adposition=&creativeid=684297719990&hide_mobile_promo=&term=%7Bterm%7D&gad_source=1&gclid=CjwKCAjwrvyxBhAbEiwAEg_KghYozjEK0kx39eGnQaPVD0iiGuUWB3vJUvrn8dS0N78cu4WxbaSJRxoCFrgQAvD_BwE",
                    "objectives": [
                        {
                            "id": "5DA95507-B2A7-4692-8CB5-6FC32F336C63",
                            "Text1": "Python for Data Science."
                        },
                        {
                            "id": "1DB4812A-4341-41CD-8412-828B723CAA56",
                            "Text1": "Python for Web Development."
                        },
                        {
                            "id": "B175059B-EC5C-4E2F-B302-9D2F2F27AB87",
                            "Text1": "Machine Learning with Python."
                        },
                        {
                            "id": "7669076B-9A82-4642-8F3F-CC0AD4E697C5",
                            "Text1": "Capstone Project."
                        },
                        {
                            "id": "3AB01AC0-B2E9-4065-8C02-AB9550C2B142",
                            "Text1": "Introduction to Python."
                        },
                        {
                            "id": "E70E2AF4-B619-40CA-BF8C-333543CE8CB0",
                            "Text1": "Advanced Python Programming."
                        }
                    ],
                    "skills": [
                        {
                            "id": "00A7E42D-5F58-41A6-B32E-2F380129DC6C",
                            "Text1": "Continuous Learning and Adaptability"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Ethical Considerations in Programming"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Code Optimization and Best Practices"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Capstone Project"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Network and System Administration"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Data Structures and Algorithms"
                        }
                    ],
                
                    "instructorInfo": [
                        {
                            "id": "C26E3520-8209-47D4-9101-621C7D3A2412",
                            "fName": "Mohmed  ",
                            "lName": "Omar",
                            "profilePhoto": "https://firebasestorage.googleapis.com/v0/b/zedny-eg.appspot.com/o/UserProfile%2FAvatar.png?alt=media&token=e88247b1-2cdc-457d-826f-dd9c2b0aa5b6",
                            "rate": 4.7,
                            "courses": 10,
                            "students": 20112077
                        }
                    ], 
                },
                {
                    "id":4,
                    "productsName": "Object Oriented Programming",
                    "productsAbout": "The Object-Oriented Programming (OOP) course is designed to provide participants with a comprehensive understanding of the principles, concepts, and practices of object-oriented programming. This course introduces the paradigm of OOP and focuses on its application in software development. Through a combination of theoretical concepts, practical examples, and hands-on programming exercises, participants will gain the knowledge and skills required to design and implement object-oriented solutions to real-world problems.",
                    "levelName": "Basic",
                    "level": "60",
                    "instructor":"Sayed Hassen",
                    "rate": null,
                    "coverPath": '../../assets/images/courses/programing/4.jpg',
                    "duration": "00:37:02",
                    "videoCount": 10,
                    "expectedTimeCompletion": 1,
                    "createdIn": "2023-07-30T18:42:00",
                    "totalQuizes": 3,
                    "link":"https://www.coursera.org/specializations/object-oriented-programming?utm_medium=sem&utm_source=gg&utm_campaign=B2C_EMEA__coursera_FTCOF_courseraplus&campaignid=20858197888&adgroupid=156245795749&device=c&keyword=coursera&matchtype=e&network=g&devicemodel=&adposition=&creativeid=684297719990&hide_mobile_promo=&term=%7Bterm%7D&gad_source=1&gclid=CjwKCAjwrvyxBhAbEiwAEg_KghYozjEK0kx39eGnQaPVD0iiGuUWB3vJUvrn8dS0N78cu4WxbaSJRxoCFrgQAvD_BwE",
                    "objectives": [
                        {
                            "id": "5DA95507-B2A7-4692-8CB5-6FC32F336C63",
                            "Text1": "Introduction to OOP."
                        },
                        {
                            "id": "1DB4812A-4341-41CD-8412-828B723CAA56",
                            "Text1": "Classes and Objects."
                        },
                        {
                            "id": "B175059B-EC5C-4E2F-B302-9D2F2F27AB87",
                            "Text1": "Encapsulation."
                        },
                        {
                            "id": "7669076B-9A82-4642-8F3F-CC0AD4E697C5",
                            "Text1": "Object-Oriented Analysis and Design (OOAD)."
                        },
                        {
                            "id": "3AB01AC0-B2E9-4065-8C02-AB9550C2B142",
                            "Text1": "Exception Handling."
                        },
                        {
                            "id": "3AB01AC0-B2E9-4065-8C02-AB9550C2B142",
                            "Text1": "Testing and Debugging OOP Code."
                        },
                        {
                            "id": "3AB01AC0-B2E9-4065-8C02-AB9550C2B142",
                            "Text1": "Real-world OOP Applications."
                        },
                        {
                            "id": "3AB01AC0-B2E9-4065-8C02-AB9550C2B142",
                            "Text1": "Application of OOP in Software Development."
                        }
                    ],
                    "skills": [
                        {
                            "id": "00A7E42D-5F58-41A6-B32E-2F380129DC6C",
                            "Text1": "Design Patterns"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Abstraction and Modeling"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Testing and Debugging OOP Code"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Real-world OOP Applications"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Problem-Solving and Critical Thinking"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Continuous Learning and Adaptability"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Understanding OOP Concepts"
                        }
                    ],
                
                    "instructorInfo": [
                        {
                            "id": "C26E3520-8209-47D4-9101-621C7D3A2412",
                            "fName": "Sayed  ",
                            "lName": "Hassen",
                            "profilePhoto": "https://firebasestorage.googleapis.com/v0/b/zedny-eg.appspot.com/o/UserProfile%2FAvatar.png?alt=media&token=e88247b1-2cdc-457d-826f-dd9c2b0aa5b6",
                            "rate": 4.9,
                            "courses": 8,
                            "students": 18112077
                        }
                    ], 
                },
            ],
            "mathematics":[
                {
                    "id":1,
                    "productsName": "Introduction to Mathematical Thinking",
                    "productsAbout": "The Introduction to Mathematical Thinking course is designed to cultivate a foundational understanding of mathematical reasoning and problem-solving skills. This course goes beyond rote memorization of formulas and procedures, focusing on developing the ability to think critically and abstractly about mathematical concepts. Through a combination of theoretical exploration and hands-on exercises, students will gain the essential skills needed for advanced mathematical study and real-world problem-solving.",
                    "levelName": "Basic",
                    "level": "70",
                    "instructor":"Mohmed Saad",
                    "rate": null,
                    "coverPath": '../../assets/images/courses/math/1.jpg',
                    "duration": "00:31:02",
                    "videoCount": 13,
                    "expectedTimeCompletion": 1,
                    "createdIn": "2023-07-30T18:42:00",
                    "totalQuizes": 3,
                    "link":"https://www.coursera.org/learn/mathematical-thinking?utm_medium=sem&utm_source=gg&utm_campaign=B2C_EMEA__coursera_FTCOF_courseraplus&campaignid=20858197888&adgroupid=156245795749&device=c&keyword=coursera&matchtype=e&network=g&devicemodel=&adposition=&creativeid=684297719990&hide_mobile_promo=&term=%7Bterm%7D&gad_source=1&gclid=CjwKCAjwrvyxBhAbEiwAEg_KghYozjEK0kx39eGnQaPVD0iiGuUWB3vJUvrn8dS0N78cu4WxbaSJRxoCFrgQAvD_BwE",
                    "objectives": [
                        {
                            "id": "5DA95507-B2A7-4692-8CB5-6FC32F336C63",
                            "Text1": "Foundations of Mathematical Reasoning."
                        },
                        {
                            "id": "1DB4812A-4341-41CD-8412-828B723CAA56",
                            "Text1": "Problem-Solving Techniques."
                        },
                        {
                            "id": "B175059B-EC5C-4E2F-B302-9D2F2F27AB87",
                            "Text1": "Abstract Thinking and Symbolic Representation."
                        },
                        {
                            "id": "7669076B-9A82-4642-8F3F-CC0AD4E697C5",
                            "Text1": "Set Theory and Logic."
                        },
                        {
                            "id": "3AB01AC0-B2E9-4065-8C02-AB9550C2B142",
                            "Text1": "Proof Techniques."
                        },
                        {
                            "id": "E70E2AF4-B619-40CA-BF8C-333543CE8CB0",
                            "Text1": "Logic and Propositional Calculus."
                        }
                    ],
                    "skills": [
                        {
                            "id": "00A7E42D-5F58-41A6-B32E-2F380129DC6C",
                            "Text1": "Continuous Learning"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Collaboration and Teamwork"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Communication of Mathematical Ideas"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Application of Mathematical Thinking"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Critical Analysis"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Algorithmic Thinking"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Proof Construction"
                        }
                    ],
                
                    "instructorInfo": [
                        {
                            "id": "C26E3520-8209-47D4-9101-621C7D3A2412",
                            "fName": "Mohmed ",
                            "lName": "Saad",
                            "profilePhoto": "https://firebasestorage.googleapis.com/v0/b/zedny-eg.appspot.com/o/UserProfile%2FAvatar.png?alt=media&token=e88247b1-2cdc-457d-826f-dd9c2b0aa5b6",
                            "rate": 4.3,
                            "courses": 5,
                            "students": 28112077
                        }
                    ], 
                },
                {
                    "id":2,
                    "productsName": "Introduction to Calculus",
                    "productsAbout": "The Introduction to Calculus course is designed to provide students with a fundamental understanding of the principles and applications of calculus. This foundational course explores the concepts of limits, derivatives, and integrals, offering students the tools to analyze and model various mathematical and real-world phenomena. Through a combination of theoretical lessons, problem-solving exercises, and practical applications, students will gain the necessary skills to comprehend and apply calculus in diverse academic and professional contexts.",
                    "levelName": "Basic",
                    "level": "90",
                    "instructor":"Kareem Ahmed",
                    "rate": null,
                    "coverPath": '../../assets/images/courses/math/3.jpg',
                    "duration": "00:45:02",
                    "videoCount": 18,
                    "expectedTimeCompletion": 4,
                    "createdIn": "2023-07-30T18:42:00",
                    "totalQuizes": 3,
                    "link":"https://www.coursera.org/learn/introduction-to-calculus?utm_medium=sem&utm_source=gg&utm_campaign=B2C_EMEA__coursera_FTCOF_courseraplus&campaignid=20858197888&adgroupid=156245795749&device=c&keyword=coursera&matchtype=e&network=g&devicemodel=&adposition=&creativeid=684297719990&hide_mobile_promo=&term=%7Bterm%7D&gad_source=1&gclid=CjwKCAjwrvyxBhAbEiwAEg_KghYozjEK0kx39eGnQaPVD0iiGuUWB3vJUvrn8dS0N78cu4WxbaSJRxoCFrgQAvD_BwE",
                    "objectives": [
                        {
                            "id": "5DA95507-B2A7-4692-8CB5-6FC32F336C63",
                            "Text1": "Limits and Continuity"
                        },
                        {
                            "id": "1DB4812A-4341-41CD-8412-828B723CAA56",
                            "Text1": "Differentiation"
                        },
                        {
                            "id": "B175059B-EC5C-4E2F-B302-9D2F2F27AB87",
                            "Text1": "Applications of Derivatives"
                        },
                        {
                            "id": "7669076B-9A82-4642-8F3F-CC0AD4E697C5",
                            "Text1": "ntegration"
                        },
                        {
                            "id": "3AB01AC0-B2E9-4065-8C02-AB9550C2B142",
                            "Text1": "Applications of Integrals"
                        },
                        {
                            "id": "E70E2AF4-B619-40CA-BF8C-333543CE8CB0",
                            "Text1": "Techniques of Integration"
                        }
                    ],
                    "skills": [
                        {
                            "id": "00A7E42D-5F58-41A6-B32E-2F380129DC6C",
                            "Text1": "Independent Learning"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "nterdisciplinary Awareness"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Critical Thinking and Problem Solving"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Mathematical Communication"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Applications of Derivatives"
                        }
                    ],
                
                    "instructorInfo": [
                        {
                            "id": "C26E3520-8209-47D4-9101-621C7D3A2412",
                            "fName": "Kareem ",
                            "lName": "Ahmed",
                            "profilePhoto": "https://firebasestorage.googleapis.com/v0/b/zedny-eg.appspot.com/o/UserProfile%2FAvatar.png?alt=media&token=e88247b1-2cdc-457d-826f-dd9c2b0aa5b6",
                            "rate": 4.1,
                            "courses": 3,
                            "students": 11120
                        }
                    ], 
                },
                {
                    "id":3,
                    "productsName": "Calculus: Single Variable Part 1 - Functions",
                    "productsAbout": "The Calculus: Single Variable Part 1 - Functions course serves as the introductory segment of a comprehensive calculus series. This course focuses on the foundational principles of calculus, emphasizing the concept of functions as the building blocks of mathematical analysis. Through a blend of theoretical exploration, problem-solving exercises, and practical applications, students will develop a deep understanding of functions and their role in calculus.",
                    "levelName": "Basic",
                    "level": "75",
                    "instructor":"Mohmed Omar",
                    "rate": null,
                    "coverPath":  '../../assets/images/courses/math/2.jpg',
                    "duration": "00:31:02",
                    "videoCount": 22,
                    "expectedTimeCompletion": 7,
                    "createdIn": "2023-07-30T18:42:00",
                    "totalQuizes": 4,
                    "objectives": [
                        {
                            "id": "5DA95507-B2A7-4692-8CB5-6FC32F336C63",
                            "Text1": "Foundations of Functions."
                        },
                        {
                            "id": "1DB4812A-4341-41CD-8412-828B723CAA56",
                            "Text1": "Limits and Continuity."
                        },
                        {
                            "id": "B175059B-EC5C-4E2F-B302-9D2F2F27AB87",
                            "Text1": "Rates of Change and Derivatives."
                        },
                        {
                            "id": "7669076B-9A82-4642-8F3F-CC0AD4E697C5",
                            "Text1": "Applications of Derivatives."
                        },
                        {
                            "id": "3AB01AC0-B2E9-4065-8C02-AB9550C2B142",
                            "Text1": "Integration."
                        },
                        {
                            "id": "E70E2AF4-B619-40CA-BF8C-333543CE8CB0",
                            "Text1": "Applications of Integrals."
                        }
                    ],
                    "skills": [
                        {
                            "id": "00A7E42D-5F58-41A6-B32E-2F380129DC6C",
                            "Text1": "Independent Learning"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Real-World Applications"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Mathematical Communication"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Exponential and Logarithmic Functions"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Limits and Continuity"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Graphical Analysis"
                        }
                    ],
                
                    "instructorInfo": [
                        {
                            "id": "C26E3520-8209-47D4-9101-621C7D3A2412",
                            "fName": "Mohmed  ",
                            "lName": "Omar",
                            "profilePhoto": "https://firebasestorage.googleapis.com/v0/b/zedny-eg.appspot.com/o/UserProfile%2FAvatar.png?alt=media&token=e88247b1-2cdc-457d-826f-dd9c2b0aa5b6",
                            "rate": 4.7,
                            "courses": 10,
                            "students": 20112077
                        }
                    ], 
                },
                {
                    "id":4,
                    "productsName": "Pre-Calculus",
                    "productsAbout": "The Pre-Calculus course serves as a preparatory foundation for advanced mathematical concepts and calculus. This course is designed to review and reinforce essential mathematical topics, ensuring that students have a solid understanding of algebra, trigonometry, and other key concepts before delving into more advanced calculus coursework. Through a combination of theoretical lessons, practical applications, and problem-solving exercises, students will build the necessary skills to succeed in higher-level mathematics.",
                    "levelName": "Basic",
                    "level": "58",
                    "instructor":"Sayed Hassen",
                    "rate": null,
                    "coverPath": '../../assets/images/courses/math/maxresdefault.jpg',
                    "duration": "00:21:02",
                    "videoCount": 2,
                    "expectedTimeCompletion": 1,
                    "createdIn": "2023-07-30T18:42:00",
                    "totalQuizes": 3,
                    "objectives": [
                        {
                            "id": "5DA95507-B2A7-4692-8CB5-6FC32F336C63",
                            "Text1": "Algebraic Fundamentals."
                        },
                        {
                            "id": "1DB4812A-4341-41CD-8412-828B723CAA56",
                            "Text1": "Functions and Graphs."
                        },
                        {
                            "id": "B175059B-EC5C-4E2F-B302-9D2F2F27AB87",
                            "Text1": "Trigonometry Review."
                        },
                        {
                            "id": "7669076B-9A82-4642-8F3F-CC0AD4E697C5",
                            "Text1": "Exponential and Logarithmic Functions."
                        },
                        {
                            "id": "3AB01AC0-B2E9-4065-8C02-AB9550C2B142",
                            "Text1": "Systems of Equations and Inequalities."
                        },
                        {
                            "id": "3AB01AC0-B2E9-4065-8C02-AB9550C2B142",
                            "Text1": "Matrices and Determinants."
                        },
                        {
                            "id": "3AB01AC0-B2E9-4065-8C02-AB9550C2B142",
                            "Text1": "Polar Coordinates and Complex Numbers."
                        }
                    ],
                    "skills": [
                        {
                            "id": "00A7E42D-5F58-41A6-B32E-2F380129DC6C",
                            "Text1": "Independent Learning"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Communication of Mathematical Ideas"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Matrix and Determinant Mastery"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Analytic Geometry Skills"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Function Analysis"
                        },
                        {
                            "id": "E24C3A27-8466-47DA-97FD-6AD49D244F83",
                            "Text1": "Algebraic Proficiency"
                        }
                    ],
                
                    "instructorInfo": [
                        {
                            "id": "C26E3520-8209-47D4-9101-621C7D3A2412",
                            "fName": "Sayed  ",
                            "lName": "Hassen",
                            "profilePhoto": "https://firebasestorage.googleapis.com/v0/b/zedny-eg.appspot.com/o/UserProfile%2FAvatar.png?alt=media&token=e88247b1-2cdc-457d-826f-dd9c2b0aa5b6",
                            "rate": 4.1,
                            "courses": 6,
                            "students": 19112077
                        }
                    ], 
                },
            ]
        }
        
       
]
  booksProdectDetalis:any[]=[]
constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _Router:Router
    
    ) { }
  ngOnInit(): void {
      
//   this.coursesName = this._ActivatedRoute.snapshot.paramMap.get('name');
//   this.coursesId = this._ActivatedRoute.snapshot.paramMap.get('id');
  console.log(this.coursesName);
  this.coursesName = this._ActivatedRoute.snapshot.paramMap.get('name');
  this.coursesId = this._ActivatedRoute.snapshot.paramMap.get('id');
  this.allCourses.forEach((element:any) => {
      const name =this.coursesName
      console.log(name);
      console.log(element.coursesName);
      if(this.coursesName=="English"){
          this.booksProdectDetalis=[]
          element.English.forEach((eleme:any) => {
              console.log(eleme.id);
              if(eleme.id== this.coursesId){
                  this.booksProdectDetalis.push(eleme)
              }
              
            //this.coursesRelated.push(eleme)
          });
         }else  if(this.coursesName=="mathematics"){
          this.booksProdectDetalis=[]
          element.mathematics.forEach((eleme:any) => {
              console.log(eleme.id);
              if(eleme.id== this.coursesId){
                  this.booksProdectDetalis.push(eleme)
              }
              
            //this.coursesRelated.push(eleme)
          });
        }else  if(this.coursesName=="programing"){
          this.booksProdectDetalis=[]
          element.programing.forEach((eleme:any) => {
              console.log(eleme.id);
              if(eleme.id== this.coursesId){
                  this.booksProdectDetalis.push(eleme)
              }
              
            //this.coursesRelated.push(eleme)
          });
        }
    });
//   this.allCourses.forEach((element:any) => {
//     const name =this.coursesName
//     console.log(name);
//     console.log(element.coursesName);
//     if(this.coursesName=="English"){
//         this.booksProdectDetalis=[]
//         element.English.forEach((eleme:any) => {
//             console.log(eleme.id);
//             if(eleme.id== this.coursesId){
//                 this.booksProdectDetalis.push(eleme)
//             }
            
//           //this.coursesRelated.push(eleme)
//         });
//        }else  if(this.coursesName=="mathematics"){
//         this.booksProdectDetalis=[]
//         element.mathematics.forEach((eleme:any) => {
//             console.log(eleme.id);
//             if(eleme.id== this.coursesId){
//                 this.booksProdectDetalis.push(eleme)
//             }
            
//           //this.coursesRelated.push(eleme)
//         });
//       }else  if(this.coursesName=="programing"){
//         this.booksProdectDetalis=[]
//         element.programing.forEach((eleme:any) => {
//             console.log(eleme.id);
//             if(eleme.id== this.coursesId){
//                 this.booksProdectDetalis.push(eleme)
//             }
            
//           //this.coursesRelated.push(eleme)
//         });
//       }
//   });
    
    

  if(this.coursesName=="English"){
   this.English.forEach((element:any) => {
     this.coursesRelated.push(element)
   });
  }else  if(this.coursesName=="mathematics"){
   this.mathematics.forEach((element:any) => {
     this.coursesRelated.push(element)
   });
 }else  if(this.coursesName=="programing"){
   this.programing.forEach((element:any) => {
     this.coursesRelated.push(element)
   });
 }
  }
  GetdeacriptionCourse(){
    // this.coursesName = this._ActivatedRoute.snapshot.paramMap.get('name');
    // this.coursesId = this._ActivatedRoute.snapshot.paramMap.get('id');
    this.allCourses.forEach((element:any) => {
        const name =this.coursesName
        console.log(name);
        console.log(element.coursesName);
        if(this.coursesName=="English"){
            this.booksProdectDetalis=[]
            element.English.forEach((eleme:any) => {
                console.log(eleme.id);
                if(eleme.id== this.coursesId){
                    this.booksProdectDetalis.push(eleme)
                }
                
              //this.coursesRelated.push(eleme)
            });
           }else  if(this.coursesName=="mathematics"){
            this.booksProdectDetalis=[]
            element.mathematics.forEach((eleme:any) => {
                console.log(eleme.id);
                if(eleme.id== this.coursesId){
                    this.booksProdectDetalis.push(eleme)
                }
                
              //this.coursesRelated.push(eleme)
            });
          }else  if(this.coursesName=="programing"){
            this.booksProdectDetalis=[]
            element.programing.forEach((eleme:any) => {
                console.log(eleme.id);
                if(eleme.id== this.coursesId){
                    this.booksProdectDetalis.push(eleme)
                }
                
              //this.coursesRelated.push(eleme)
            });
          }
         
      });
      
  }
 
  goToDesc(id:any){
    console.log(id);
    
    this._Router.navigate([`/course/${this.coursesName}/description/${id}`]);
    this.coursesId=id
    this.GetdeacriptionCourse();
    
}
routeToCourse(link:string){
    window.location.href = link;
}

}
