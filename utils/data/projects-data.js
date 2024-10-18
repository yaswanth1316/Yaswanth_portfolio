import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'DiagnoSym',
        description: "Developed a health assistant using React.js, Django, and Python, achieving 93.2% disease prediction accuracy and enhancing symptom assessment by 15% with NLP.Database management with SQLite3. Deployed and managed with GitHub for collaborative development.",
        tools: ['HTML', 'CSS', 'Python', 'Django', 'ReactJS', 'SQLite3', 'Git', 'Jira'],
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'The Biography Nook',
        description: 'Developed a responsive bookstore website utilizing HTML, Vue.js, CSS, and MySQL, showcasing proficiency in front-end and back-end technologies for dynamic and user-friendly web experiences. Integrated MySQL to manage 200+ books, user accounts, and transactions, showcasing data management skills.',
        tools: ['HTML', 'CSS', "VueJS", "RestAPI", "TypeScript", "MySQL", "Git"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Accolade',
        description: 'Developed Accolade app using Flask, PostgreSQL, and Stack API for a dynamic reward system. Managed 1,000+ user records with PostgreSQL, ensuring efficient data handling and scalability. Integrated Power BI to track user metrics, boosting user activity by 20%.',
        tools: ['HTML', 'CSS', 'Flask', ' PostgreSQL,', 'PowerBI', 'StackAPI', 'Git'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Blood Bank Donation System',
        description: "Utilized React.js and Flask for frontend and backend respectively. Managed SQL database for efficient data storage. Implemented encryption and user authentication for data security. Implemented robust security measures including encryption and user authentication to protect sensitive donor data, adhering to the highest standards of data privacy and security.",
        tools: ['HTML', 'CSS', 'Flask', 'React', "SQL", "Git"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 5,
        name: 'Talking Buddy: YourAICompanion',
        description: "DevelopedachatbotusingaGRUneuralnetworkwithsentimentanalysisforcontextualresponses. Optimized model performance, reducing latency by 15% and achieving 85% accuracy in emotion detection. DesignedthefrontendwithReactandservedmodelpredictionsviaaFlaskAPI.",
        tools: ['TextBlob', 'RestAPI', 'Scikit-Learn', 'Python', "NLP", "Git"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },