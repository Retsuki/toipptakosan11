import{_ as k,d as $,h as y,r as C,c as a,a as e,F as b,f as g,n as r,o as t,b as h,w as v,t as n}from"./entry-a8744911.mjs";import{u as w}from"./index-b974a06f.mjs";const E="_wrapper_1kexk_1",M="_card_1kexk_12",x="_cardContent_1kexk_16",B="_profileImage_1kexk_26",D="_name_1kexk_32";var I={wrapper:E,card:M,cardContent:x,profileImage:B,name:D};const F=$({setup(){const{members:s,getMembers:l}=w();return y(()=>{l()}),{members:s}}}),j=e("h1",null,"Member",-1),A=["src"];function N(s,l,V,z,L,S){const c=C("router-link");return t(),a("div",{class:r(s.$style.wrapper)},[j,e("ul",null,[(t(!0),a(b,null,g(s.members,({id:o,updatedAt:m,name:i,occupation:_,company:d,experience_year:p,profile_image:f})=>(t(),a("li",{key:o,class:r(s.$style.card)},[h(c,{to:`/member/${o}`,class:r(s.$style.cardContent)},{default:v(()=>[e("img",{src:f.url,class:r(s.$style.profileImage)},null,10,A),e("div",null,[e("div",{class:r(s.$style.name)},n(i),3),e("ul",null,[e("li",null,"\u8077\u7A2E: "+n(_[0]),1),e("li",null,"\u7D4C\u9A13\u5E74\u6570: "+n(p)+"\u5E74",1),e("li",null,"\u52E4\u52D9\u5148: "+n(d),1),e("li",null,"\u6700\u7D42\u66F4\u65B0\u65E5: "+n(m),1)])])]),_:2},1032,["to","class"])],2))),128))])],2)}const u={};u.$style=I;var H=k(F,[["render",N],["__cssModules",u]]);export{H as default};
