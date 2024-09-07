const navItems =[
    {
        label:"Products",
        route:"services",
        set:{
          apps:{
            label:"Apps & Websites",
            topic:"Here at Binary Labs we are experts at creating custom apps for both ios and android tailored to your specific business needs including state of the art beautiful web apps.",
            route:"products"
          },
        }
    },
    {
        label:"Services",
        route:"services",
        set:{
          apps:{
            label:"APIs,Backends and Maintainance",
            topic:"Here at Binary Labs we are experts at creating custom APIs tailored to your specific business needs.",
            route:"services"
          },
          
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
    icon:"icons/node.svg",
    content:"A javascript tool that our team utilizes to build both RESTFUL APIs and also apps or website backends."
  },
  {
    label:"React",
    icon:"/icons/react.svg",
    content:"A powerfull front-end framework that our team utilizes to build eye-catching websites that can help you market you business whether big or an SME we got you covered."
  },
  {
    label:"Next JS",
    icon:"icons/next.svg",
    content:"A react framework which we can utilize to build powerfull websites that perform faster since it will operate on a serverless environment"
  },
  {
    label:"Python",
    icon:"/icons/python.svg",
    content:"One of the oldest languages but still relevant to date we  utilize this to intergrate Artificial Intelligence into your business and make you perform better by improving your products remember to be for warned is to be foramed"
  }
]

export {navItems,showRoom}