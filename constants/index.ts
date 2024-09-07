const navItems =[
    {
        label:"Products",
        route:"services",
        set:{
          apps:{
            label:"Apps",
            topic:"Here at Binary Labs we are experts at creating custom apps for both ios and android tailored to your specific business needs",
            route:"products/apps"
          },
          web:{
            label:"Websites",
            topic:"Websites are by far the most common way for most SMEs to market their business and at Binary labs we help your business reach the next level with sites suited to your specific needs",
            route:"products/websites"
          }
        }
    },
    {
        label:"Services",
        route:"services",
        set:{
          api:{
            label:"APIs",
            topic:"Here at Binary Labs we are experts at creating custom APIs tailored to your specific business needs",
            route:"services/apis"
          },
          maintainance:{
            label:"Maintainance",
            topic:"Software is a living breathing entity that needs to be maintained and updated regularly to keep it running smoothly. At Binary Labs we offer maintainance services to keep your software running smoothly",
            route:"services/maintainance"
          }
        }
    }
]

const showRoom = [
  {
    label:"React Native",
    icon:"/icons/react.svg",
    content:"One of our preffered frameworks for building crossplatform apps both for ios and android"
  },
  {
    label:"Flutter",
    icon:"/icons/flutter.svg",
    content:"Apart from React Native our team also utilizes this framework to build crossplatform applications including desktop , linux and MacOs apps depending on your business needs."
  },
  {
    label:"Node JS",
    icon:"",
    content:"A javascript tool that our team utilizes to build both RESTFUL APIs and also apps or website backends."
  },
  {
    label:"React",
    icon:"/icons/react.svg",
    content:"A powerfull front-end framework that our team utilizes to build eye-catching websites that can help you market you business whether big or an SME we got you covered."
  },
  {
    label:"Next JS",
    icon:"",
    content:"A react framework which we can utilize to build powerfull websites that perform faster since it will operate on a serverless environment"
  },
  {
    label:"Python",
    icon:"/icons/python.svg",
    content:"One of the oldest languages but still relevant to date we  utilize this to intergrate Artificial Intelligence into your business and make you perform better by improving your products remember to be for warned is to be foramed"
  }
]

export {navItems,showRoom}