  const jinrishici = require('../../utils/jinrishici.js')
  var app = getApp()
  Page({

    data: {
      nowPage:"firstPage",
      nowIndex:0,
      tabBar:[
        {
          "iconClass":"iconfont icon-shouye",
          "text":"第一页",
          "tapFunction":"toFirst",
          "active":"active"
        },
        {
          "iconClass":"iconfont icon-wode",
          "text":"第二页",
          "tapFunction": "toSecond",
          "active": ""
        }
      ]
    },



  shuaxin: function (options){
    jinrishici.load(result => {
      console.log(result)
      this.setData({
       "jinrishici": result.data.origin.content,
       "biaoti": result.data.origin.title ,
       "zuozhe": result.data.origin.author,
       "shidai": result.data.origin.dynasty
                            })

      if(result.data.origin.translate !== null)
       {
        this.setData({
          "zhushi": result.data.origin.translate
                              })
        }
   })
  },

  toFirst(){
    this.setData({
      nowPage:"firstPage",
      nowIndex: 0
    })
  },

  toSecond() {
    this.setData({
      nowPage: "secondPage",
      nowIndex: 1
    })
  },



  onLoad: function (options){
    this.shuaxin()
    }

  // splitString: function (stringToSplit , separator) {
  //     let array = stringToSplit.split(separator)
  //     for(let i=0;i<array.length;i++)
  //         {
  //             if(i !== array.length-1)
  //                  {  
  //                      array[i] += '，'
  //                   }
  //           }   
  //         return array;
  // }
    })
  

