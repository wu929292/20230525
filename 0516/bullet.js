//定義一個bullet物件的class
class Bullet{
    constructor(args){//預設值,基本資料
        this.r = args.r || 10 //設計飛彈有大有小時，傳參數,a,args.r 設定飛彈大小，沒有傳參數，就以10為主
        this.p = args.p || shipP.copy()   //建立一個向量，{x:width/2, y:height/2}   
        this.v = args.v || createVector(mouseX-width/2,mouseY-height/2).limit(5)  
        this.color = args.color || "#1982c4"
    }
   draw(){ //繪出物件
      push()
          translate(this.p.x,this.p.y)
          fill(this.color)
          noStroke()
         ellipse(0,0,this.r)
    pop() 
   } 
   update(){ //計算出移動後的位置
     this.p.add(this.v)
 
  }
}
  