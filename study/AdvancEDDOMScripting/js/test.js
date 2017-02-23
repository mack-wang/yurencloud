
sx.$=function(id){
    var t=(typeof(id)=="string"?document.getElementById(id):id);
    t.text=function(){
        return this.innerText?this.innerText:this.innerHTML.replace(//<.*?/>/igm,"");
    }
    t.html=function(){
        return this.innerHTML?this.innerHTML:null;
    }
    t.first=function(){
        return this.firstChild?this.firstChild.nodeName!="#text"?sx.$(this.firstChild):null:null;
    }
    t.last=function(){
        return this.lastChild?this.lastChild.nodeName!="#text"?sx.$(this.lasChild):null:null;
    }
    t.pre=function(){
        return this.previousSibling?sx.$(this.previousSibling):null;
    }
    t.next=function(){
        return this.nextSibling?sx.$(this.nextSibling):null;
    }
    t.parent=function(){
        return this.parentNode?sx.$(this.parentNode):null;
    }
    t.setevent=function(e,f){
        if(t.attachEvent){
            t.attachEvent("on"+e,f);
        }else{
            t.addEventListener(e,f,false);
        }
    }
    t.removeevent=function(e,f){
        if(t.dettachEvent){
            t.dettachEvent("on"+e,f);
        }else{
            t.removeEventListener(e,f,false);
        }
    }
    t.setstyle=function(s){
        var s=s.split(",");
        for(var i=0;i<s.length;i++){
            var s1=s[i].split(":");
            this.style[s1[0]]=s1[1];
        }
    }
    t.getstyle=function(s){
        if(this.currentStyle){
            return this.currentStyle[s];
        }else{
            return document.defaultView.getComputedStyle(this,null).getPropertyValue(s);
        }
    }
    t.selectpath=function(m){
        var m1=m;
        var m=m.split("/");
        var t=[];
        var e=this.getElementsByTagName("*");
        for(var i=0;i<e.length;i++){
            var e1=e[i]
            var a="";
            var i1=m.length-1;
            while(e1!=this){
                a=e1.tagName+"/"+a;
                e1=e1.parentNode;
//alert(a); 
            }
//alert(a); 
            if(m1.toLowerCase()+"/"==a.toLowerCase()){
                t.push(sx.$(e[i]));
            }
        }
        return t;
    }
    t.get=function(a){
        return this.getAttribute(a);
    }
    t.set=function(a,v){
        return this.setAttribute(a,v);
    }
    t.paste=function(h){
        if(typeof(h)=="string"){
            var d=document.createElement("span");
            d.innerHTML=h;
        }else{
            var d=document.createElement("span");
            d.appendChild(h);
        }
        var t1=this.childNodes;
        for(var i=0;i<t1.length;i++){
            alert(t1[i])
            this.removeChild(t1[i]);
        }
        this.appendChild(d);
        d.removeNode(false);
    }
    return t;
}
sx.$$=function(){
    var t=[]
    for(var i=0;i<arguments.length;i++){
        t.push(sx.$(arguments[i]))
    }
    return t;
}