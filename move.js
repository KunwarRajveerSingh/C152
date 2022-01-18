AFRAME.registerComponent('move', {
    schema: {
        moveY: {type:'number', default:1}
    },
    tick: function(){
        var pos = this.el.getAttribute('position')
        this.data.moveY += 0.01
        pos.y = this.data.moveY
        this.el.setAttribute('position', {x: pos.x, y: pos.y, z: pos.z}) 
    }
})