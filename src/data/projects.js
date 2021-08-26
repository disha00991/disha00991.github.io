// TODO Add a couple lines about each project
const data = [
  {
    title: 'Data Scientist Salary Predictor',
    subtitle: '2019 Howathon @ Publicis Sapient',
    link: 'https://predict-ctc.herokuapp.com/',
    github: 'https://bit.ly/predict-salaries',
    image: '/images/projects/salary.png',
    date: 'July 2021',
    desc: 'Estimates salary of data scientists from Glassdoor’s job descriptions. Performed Data Cleaning & Preprocessing (TableauPrepBuilder,Pandas),DataAnalysis (Seaborn,Matplotlib,Tableau), FeatureEngineering & Predictive Modelling(Random Forest). Deployed with heroku in a Flask webapp.'
  }, 
  {
    title: 'Color Palette Creation from Image',
    subtitle: 'Inspired when I wanted to find a way to quickly decide which colors to select to paint an aurora scene',
    link: 'https://color-clustering.herokuapp.com/',
    github: 'https://bit.ly/color-clustering',
    image: '/images/projects/palette.png',
    date: 'June 2021',
    desc: 'Creates clusters of colors contained in an image to show the Color Palette (one can specify how many colors you want to use) that can be used to paint a given image. \
    The flask app can be used to form clusters of colors in the image on the basis of certain user-defined inputs. The app is deployed with heroku. \
    Worked with unsupervised learning, different algorithms for Clustering.'
  }, 
  {
    title: 'Google’s MapReduce',
    subtitle: 'Distributed/Parallel Processing Simulation. Received 10/10 for Project',
    link: '',
    github: 'https://github.com/disha00991/Google-Map-Reduce',
    image: '/images/projects/mapreduce.jpg',
    date: 'April 2021',
    desc: 'Master-Slave architecture executing user-defined Map Reduce operations on Big data.'+
    'I used Java and learnt Socket Programming for this project.'+
    'This was submitted as a Final Project for Systems for Data Science course: CS 532.'
  }, 
  {
    title: '3D Surface Reconstruction using Deep Learning for Point Clouds',
    subtitle: 'Project for Intelligent Visual Computing course CS 674',
    link: '',
    github: 'https://github.com/disha00991/Surface-Reconstruction',
    image: '/images/projects/deep rbf.png',
    date: 'Mar 2021',
    desc: 'Used 3D Deep Learning Methods of Naive Reconstruction, Rbf Reconstruction and Mlf Reconstruction to construct a Bunny and Sphere from point clouds of 500 points or 1000 points.'
  }, 
  {
    title: '3D Shape Classification using Multi-View data',
    subtitle: 'Project for Intelligent Visual Computing course CS 674',
    link: '',
    image: '/images/projects/shape_classify.png',
    date: 'Mar 2021',
    desc: '3D objects Classification model from object images taken at different camera angles after training on a given shape database.'
  }, 
  {
    title: 'Attrition Analysis',
    subtitle: '2019 Howathon @ Publicis Sapient',
    link: '',
    image: '/images/projects/attrition.jpg',
    date: 'Mar 2019',
    desc: 'Utilized the data of past employees to determine root causes for employee exit.'+
    'Some features considered were salary, satisfaction level with project management and promotions.'+
    'Project management wasa found to be causing 66% of total attrition. Knowing this info, relevant '+
    'policy changes can be made to prevent further turnover, reducing new-hire costs.'
  }, 
 {
  title: 'Trade Management System | Metallica',
  subtitle: 'Microservices based Full-stack Training culmination Project @ Publicis Sapient',
  link: '',
  github: 'https://github.com/disha00991/Sapient-Fullstack-Training/tree/master/Metallica',
  image: '/images/projects/trade.jpg',
  date: 'Feb 2019',
  desc: 'Microservices based project for aiding company brokers in buying/selling stocks.'+
  'Utilized Java Spring Boot, Hibernate, MySQL server, RabbitMQ, ReactJS, OAuth for development.'
}, 
  {
    title: 'Cricket Match Predictor',
    subtitle: 'Self assigned ML project',
    link: '',
    image: '/images/projects/match_prediction.jpg',
    date: 'Feb 2019',
    desc: 'Utilized the statistics of chosen players from the past 5 years to determine '+
    'if India will win or lose a cricket match. Learnt Pandas, Numpy, Scikit-Learn libraries.'
  },
  {
    title: 'Tiled-display system',
    subtitle: 'End to end javascript WebApp for casting video on video wall',
    link: '',
    image: '/images/projects/video_wall.jpg',
    date: 'June 2016',
    desc: 'Video wall synchronization applciation created using Socket.io, NodeJS, Three.js.'+
    'Video was cropped into different frames and then synchronized using a centralized server '+
    'before streaming to individual screens'
  }, {
    title: 'Sentiment Analysis of Product Review Blogs',
    subtitle: 'NLP based project for extracting opinion from subjective resources',
    link: '',
    image: '/images/projects/opinion.jpg',
    date: 'Mar 2017',
    desc: 'Used Apriori Algorithm to find frequent item-sets and find association rules '+
    'to extract the opinion of the review writer. If the opinion is classified further into '+
    'positive/negative, it can aid other customers in buying decisions'
  }, {
    title: 'EAMMH & Leach Protocols',
    subtitle: 'Performance comparision of Networking Protocols',
    link: '',
    image: '/images/projects/routing.jpg',
    date: 'July 2016',
    desc: 'MATLAB based comparison of the two protocols commonly used in Wireless Sensor N/Ws.'+
    'These clustering protocols are used for extending the lifetime of N/Ws by forming clusters of '+
    'nodes and selecting their cluster head. EAMMH performs better in larger N/Ws whereas LEACH performs better '+
    'in case of smaller N/Ws.'
  }, {
    title: '8085 Microprocessor Simulation',
    subtitle: 'A SystemC based simulation of the aged 8085 processor',
    link: '',
    github: 'https://github.com/disha00991/8085-Micro-processor-Simulation-in-System-C',
    image: '/images/projects/8085.jpg',
    date: 'Mar 2015',
    desc: 'Simulated the working of 8085 microprocessor to understand the components closely '+
    'Output was calculated as is calculated using assemply language intructions in 8085. '+
    'Interrupts were also simulated.'
  }
];

export default data;
