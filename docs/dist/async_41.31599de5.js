(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{343:function(s,t,C){"use strict";C.r(t);var a={created:function(){this.content=unescape("%3Ch2%3EContact%3C/h2%3E%0A%3Ch3%3EInstall%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20ContactCard%2C%20ContactList%2C%20ContactEdit%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant%27%3C/span%3E%3B%0A%0AVue%0A%20%20.use%28ContactCard%29%0A%20%20.use%28ContactList%29%0A%20%20.use%28ContactEdit%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EUsage%3C/h3%3E%0A%3Ch4%3EBasic%20Usage%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-comment%22%3E%26lt%3B%21--%20Contact%20Card%20--%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-contact-card%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Atype%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22cardType%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aname%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22currentContact.name%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Atel%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22currentContact.tel%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Eclick%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22showList%20%3D%20true%22%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%26lt%3B%21--%20Contact%20List%20--%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-popup%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22showList%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eposition%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22bottom%22%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-contact-list%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22chosenContactId%22%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Alist%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22list%22%3C/span%3E%0A%20%20%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Eadd%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onAdd%22%3C/span%3E%0A%20%20%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Eedit%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onEdit%22%3C/span%3E%0A%20%20%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Eselect%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onSelect%22%3C/span%3E%0A%20%20/%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-popup%3C/span%3E%26gt%3B%3C/span%3E%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%26lt%3B%21--%20Contact%20Edit%20--%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-popup%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22showEdit%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eposition%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22bottom%22%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-contact-edit%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Acontact-info%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22editingContact%22%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Ais-edit%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22isEdit%22%3C/span%3E%0A%20%20%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Esave%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onSave%22%3C/span%3E%0A%20%20%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Edelete%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onDelete%22%3C/span%3E%0A%20%20/%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-popup%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20data%28%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EchosenContactId%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Enull%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EeditingContact%3C/span%3E%3A%20%7B%7D%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EshowList%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EshowEdit%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EisEdit%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Elist%3C/span%3E%3A%20%5B%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27John%20Snow%27%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etel%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%2713000000000%27%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eid%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%0A%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ecomputed%3C/span%3E%3A%20%7B%0A%20%20%20%20cardType%28%29%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.chosenContactId%20%21%3D%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Enull%3C/span%3E%20%3F%20%3Cspan%20class%3D%22hljs-string%22%3E%27edit%27%3C/span%3E%20%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27add%27%3C/span%3E%3B%0A%20%20%20%20%7D%2C%0A%0A%20%20%20%20currentContact%28%29%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20id%20%3D%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.chosenContactId%3B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20id%20%21%3D%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Enull%3C/span%3E%20%3F%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.list.filter%28%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-params%22%3Eitem%3C/span%3E%20%3D%26gt%3B%3C/span%3E%20item.id%20%3D%3D%3D%20id%29%5B%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%5D%20%3A%20%7B%7D%3B%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emethods%3C/span%3E%3A%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20add%20contact%3C/span%3E%0A%20%20%20%20onAdd%28%29%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.editingContact%20%3D%20%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Eid%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.list.length%20%7D%3B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.isEdit%20%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%3B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.showEdit%20%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%3B%0A%20%20%20%20%7D%2C%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20edit%20contact%3C/span%3E%0A%20%20%20%20onEdit%28item%29%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.isEdit%20%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%3B%20%20%20%20%20%20%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.showEdit%20%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%3B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.editingContact%20%3D%20item%3B%0A%20%20%20%20%7D%2C%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20select%20contact%3C/span%3E%0A%20%20%20%20onSelect%28%29%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.showList%20%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%3B%0A%20%20%20%20%7D%2C%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20save%20contact%3C/span%3E%0A%20%20%20%20onSave%28info%29%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.showEdit%20%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%3B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.showList%20%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C/span%3E%20%28%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.isEdit%29%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.list%20%3D%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.list.map%28%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-params%22%3Eitem%3C/span%3E%20%3D%26gt%3B%3C/span%3E%20item.id%20%3D%3D%3D%20info.id%20%3F%20info%20%3A%20item%29%3B%0A%20%20%20%20%20%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Eelse%3C/span%3E%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.list.push%28info%29%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.chosenContactId%20%3D%20info.id%3B%0A%20%20%20%20%7D%2C%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20delete%20contact%3C/span%3E%0A%20%20%20%20onDelete%28info%29%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.showEdit%20%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%3B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.list%20%3D%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.list.filter%28%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-params%22%3Eitem%3C/span%3E%20%3D%26gt%3B%3C/span%3E%20item.id%20%21%3D%3D%20info.id%29%3B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C/span%3E%20%28%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.chosenContactId%20%3D%3D%3D%20info.id%29%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.chosenContactId%20%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Enull%3C/span%3E%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3EUneditable%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-contact-card%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etype%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22edit%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22John%20Snow%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etel%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%2213000000000%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aeditable%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22false%22%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EContactCard%20API%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EType%3C/th%3E%0A%3Cth%3EDefault%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Etype%3C/td%3E%0A%3Ctd%3ECan%20be%20set%20to%20%3Ccode%3Eadd%3C/code%3E%20%3Ccode%3Eedit%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Eadd%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ename%3C/td%3E%0A%3Ctd%3EName%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etel%3C/td%3E%0A%3Ctd%3EPhone%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eadd-text%3C/td%3E%0A%3Ctd%3EAdd%20card%20text%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3EAdd%20contact%20info%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3EContactList%20API%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EType%3C/th%3E%0A%3Cth%3EDefault%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Ev-model%3C/td%3E%0A%3Ctd%3EId%20of%20chosen%20contact%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%20%7C%20Number%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Elist%3C/td%3E%0A%3Ctd%3EContact%20list%3C/td%3E%0A%3Ctd%3E%3Ccode%3EArray%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%5B%5D%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eadd-text%3C/td%3E%0A%3Ctd%3EAdd%20button%20text%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3EAdd%20new%20contact%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3EContactList%20Event%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EEvent%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EArguments%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Eadd%3C/td%3E%0A%3Ctd%3ETriggered%20when%20click%20add%20button%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eedit%3C/td%3E%0A%3Ctd%3ETriggered%20when%20click%20edit%20button%3C/td%3E%0A%3Ctd%3Eitem%3A%20contact%20object%uFF0Cindex%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eselect%3C/td%3E%0A%3Ctd%3ETriggered%20when%20select%20contact%3C/td%3E%0A%3Ctd%3Eitem%3A%20contact%20object%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3EContactEdit%20API%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EType%3C/th%3E%0A%3Cth%3EDefault%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Econtact-info%3C/td%3E%0A%3Ctd%3EContact%20Info%3C/td%3E%0A%3Ctd%3E%3Ccode%3EObject%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%5B%5D%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eis-edit%3C/td%3E%0A%3Ctd%3EWhether%20is%20editing%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eis-saving%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20save%20button%20loading%20status%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eis-deleting%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20delete%20button%20loading%20status%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etel-validator%3C/td%3E%0A%3Ctd%3EThe%20method%20to%20validate%20tel%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%28tel%3A%20string%29%20%3D%26gt%3B%20boolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3EContactEdit%20Event%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EEvent%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EArguments%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Esave%3C/td%3E%0A%3Ctd%3ETriggered%20when%20click%20save%20button%3C/td%3E%0A%3Ctd%3Econtent%uFF1Acontact%20info%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edelete%3C/td%3E%0A%3Ctd%3ETriggered%20when%20click%20delete%20button%3C/td%3E%0A%3Ctd%3Econtent%uFF1Acontact%20info%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3EContact%20Data%20Structure%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3Ekey%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EType%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Eid%3C/td%3E%0A%3Ctd%3EID%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%20%7C%20Number%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ename%3C/td%3E%0A%3Ctd%3EName%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etel%3C/td%3E%0A%3Ctd%3EPhone%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A")}},E=C(0),n=Object(E.a)(a,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this.$createElement;return(this._self._c||s)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);n.options.__file="en-US.md";t.default=n.exports}}]);