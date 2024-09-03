const navItems =[
    {
        label:"Products",
        route:"services",
        set:{
          apps:{
            label:"Apps",
            topic:"Here at Chemist Labs we are experts at creating custom apps for both ios and android tailored to your specific business needs",
            route:"products/apps"
          },
          web:{
            label:"Websites",
            topic:"Websites are by far the most common way for most SMEs to market their business and at chemist labs we help your business reach the next level with sites suited to your specific needs",
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
            topic:"Here at Chemist Labs we are experts at creating custom APIs tailored to your specific business needs",
            route:"services/apis"
          },
          maintainance:{
            label:"Maintainance",
            topic:"Software is a living breathing entity that needs to be maintained and updated regularly to keep it running smoothly. At Chemist Labs we offer maintainance services to keep your software running smoothly",
            route:"services/maintainance"
          }
        }
    }
]

export {navItems}