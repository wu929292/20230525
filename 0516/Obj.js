class Obj{  //宣告一個類別,針對一個畫的圖案
    constructor(args){ //預設值,基本資料
      // this.p =args.p || {x: random(width) , y: random(height)}//描述該物件的初始位置
      this.p =args.p || createVector(random(width),random(height))
      // this.v ={x: random(-1,1) , y: random(-1,1)}//設定一個物件的移動速度
      this.v=createVector(random(-1,1),random(-1,1))
      this.size =random(10,30)//一個物件放大倍率
      this.color=random(fill_colors)//充滿顏色
      this.stroke=random(line_colors)//外框線條顏色
    }
    draw(){//劃出單一物件形狀
      push()//執行push()後,依照我的設定,設定原點(0,0)的位置
        translate(this.p.x,this.p.y)//以該物件為原點
        scale(this.v.x<0?1:-1,-1)//如果this.v.x<0條件成立,值為1,否則為-1
        fill(this.color)
        fill(this.stroke)
        strokeWeight(4)
      beginShape()
        for(var k=0; k < points.length;k=k+1){
          // line(points[k][0]*this.size,points[k][1]*this.size,points[k+1][0]*this.size,points[k+1][1]*this.size)
          curveVertex(points[k][0]*this.size,points[k][1]*this.size)
        }
        endShape()
        pop()//執行pop(),原點(0,0)設定回到整個視窗左上角
    }
    update(){//移動的程式碼內容
      // this.p.x=this.p.x+this.v.x
      // this.p.y=this.p.y+this.v.y
      this.p.add(this.v)//設定好向量後,使用add,就可以取代上面兩行
      //向量sub==>減號
  
      //知道滑鼠的位置,並建立一個滑鼠的向量
      // let mouseV = createVector(mouseX,mouseY)//把滑鼠位置轉換成一個向量值
      // let delta = mouseV.sub(this.p).limit(3)//sub計算出滑鼠所在位置向量(mouseV)到物件向量(this.p)
      // this.p.add(delta)
  
      if(this.p.x<=0 || this.p.x>=width){
        this.v.x=-this.v.x
      }
      if(this.p.y<=0 || this.p.y>=height)
      this.v.y=-this.v.y
    }
    isBallInRanger(x,y){
      let d = dist(x,y,this.p.x,this.p.y)//計算兩點之間的距離
      if(d<4*this.size){
        return true
      }else{
        return false//滑鼠
      }
    }
  }