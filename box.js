AFRAME.registerComponent('move-box', {
    schema: {
        moveX: {type: 'number', default: 1},
        moveY: {type: 'number', default: 1},
        moveZ: {type: 'number', default: 1},

    },
    tick: function(){
        window.addEventListener('click', e => {
           
        this.data.moveX = this.data.moveX+0.01
        this.data.moveY = this.data.moveY+0.01
        this.data.moveZ = this.data.moveZ+0.01
    })
        var p = this.el.getAttribute('position')
        p.x = this.data.moveX
        p.y = this.data.moveY
        p.z = this.data.moveZ
        this.el.setAttribute('position',{x:p.x,y:p.y,z:p.z})
        var r = this.el.getAttribute('rotation')
        r.x = r.x+45
        r.y = r.y+1
        r.z = r.z+1
        this.el.setAttribute('rotation',{x:r.x,y:r.y,z:r.z})
    }
})