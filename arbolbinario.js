class Nodo{
    constructor(numero){
      this.numero=numero;
      this.hizq=null;
      this.hder=null;
    }
  }
  class ArbolBinario{
    constructor(){
      this.raiz=null;
    }
    agregar(nuevo){
      if (this.raiz==null)
        this.raiz=nuevo;
      else
        this._recAgregar(nuevo,this.raiz);
    }
    _recAgregar(nuevo,raizx){
      if (nuevo.numero<raizx.numero)
        if (raizx.hizq==null)
          raizx.hizq=nuevo;
          else
          this._recAgregar(nuevo,raizx.hizq);
      else
        if (raizx.hder==null)
          raizx.hder=nuevo;
          else
          this._recAgregar(nuevo,raizx.hder);
    }
    preorder(){
        let res='';
        if(this.raiz==null){
            
            return null;
        } else {
           return this._preorder(this.raiz)
        }

    }
    _preorder(nodox){
        let res='';
        res +=nodox.numero+","
        if(nodox.hizq!=null){
             res+= this._preorder(nodox.hizq)
        }
        if(nodox.hder!=null){
             res+= this._preorder(nodox.hder)
        }
        return res;



    }
    inorder(){
        if (this.raiz==null){
            return null;
        } else {
            return this._inorder(this.raiz)
        }
    }
    _inorder(nodox){
        let res='';
        if (nodox.hizq!=null){
            res+=this._inorder(nodox.hizq)
        } 
        res+=nodox.numero+","
        if(nodox.hder!=null){
            res+=this._inorder(nodox.hder)
        }
        return res;
    }
    postorder(){
        if (this.raiz==null){
            return null
        } else {
            return this._postorder(this.raiz)
        }
    }
    _postorder(nodox){
        let res='';
        if (nodox.hizq!=null){
            res+= this._postorder(nodox.hizq)
        } 
        if(nodox.hder!=null){
            res+=this._postorder(nodox.hder)
        }
        res+=nodox.numero+",";
        return res;

    }
    buscar(num){
        if(this.raiz==null){
            console.log("vacio")
            return null
        } else {
            return  this._buscar(this.raiz, num)
        }
    }
    _buscar(nodox,num){
       
            if(num==nodox.numero){
                console.log(nodox.numero)
                return nodox;
            } 
            if (num<nodox.numero){
                if(nodox.hizq!=null){
                     return this._buscar(nodox.hizq,num)
                }else
                {
                   
                   return null
                }

            }
            if(num>nodox.numero){
                if(nodox.hder!=null){
                    return this._buscar(nodox.hder,num)
                } else
                {
                    
                    return null
                }  
            }
    }
}
// 16,8,4,2,1,3,6,5,7,12,10,9,11,14,13,15,24,20,18,17,19,22,21,23,28,26,25,27,30,29,31 ​​

let n1= new Nodo(16);
let arbol= new ArbolBinario();
arbol.agregar(n1);
n1= new Nodo(8);
arbol.agregar(n1);
n1= new Nodo(4);
arbol.agregar(n1);
n1= new Nodo(2);
arbol.agregar(n1);
n1= new Nodo(1);
arbol.agregar(n1);
n1= new Nodo(3);
arbol.agregar(n1);
n1= new Nodo(6);
arbol.agregar(n1);
n1= new Nodo(5);
arbol.agregar(n1);
n1= new Nodo(7);
arbol.agregar(n1);
n1= new Nodo(12);
arbol.agregar(n1);
n1= new Nodo(10);
arbol.agregar(n1);
n1= new Nodo(9);
arbol.agregar(n1);
n1= new Nodo(11);
arbol.agregar(n1);
n1= new Nodo(14);
arbol.agregar(n1);
n1= new Nodo(13);
arbol.agregar(n1);
n1= new Nodo(15);
arbol.agregar(n1);
n1= new Nodo(24);
arbol.agregar(n1);
n1= new Nodo(20);
arbol.agregar(n1);
n1= new Nodo(18);
arbol.agregar(n1);
n1= new Nodo(17);
arbol.agregar(n1);
n1= new Nodo(19);
arbol.agregar(n1);
n1= new Nodo(22);
arbol.agregar(n1);
n1= new Nodo(21);
arbol.agregar(n1);
n1= new Nodo(23);
arbol.agregar(n1);
n1= new Nodo(28);
arbol.agregar(n1);
n1= new Nodo(26);
arbol.agregar(n1);
n1= new Nodo(25);
arbol.agregar(n1);
n1= new Nodo(27);
arbol.agregar(n1);
n1= new Nodo(30);
arbol.agregar(n1);
n1= new Nodo(29);
arbol.agregar(n1);
n1= new Nodo(31);
arbol.agregar(n1);
arbol.buscar(1)
