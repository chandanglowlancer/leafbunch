function page1Animation() {
    var tl = gsap.timeline()

tl.from('nav p', {
    y:-20,
    duration: 1,
    opacity:0,
})

tl.from('nav li, nav button', {
    y:-20,
    duration: 1,
    delay:0.2,
    opacity:0,
    stagger: 0.15
})


tl.from('.cernte-section-1 h1', {
   x:-20,
    duration: 0.5,
    delay:.4,
    opacity:0,
    
})

tl.from('.cernte-section-1 p', {
    x:-20,
     duration: 0.5,
     delay:.4,
     opacity:0,
     
 })

 tl.from('.cernte-section-1 button', {
    x:-20,
     duration: 0.5,
     delay:.4,
     opacity:0,
     
 })

 tl.from('.cernte-section-2 img', {
    y:-20,
     duration: 0.5,
     delay:.2,
     opacity:0,
     
 }, "-=2")

 tl.from('.plants-section img', {
    opacity: 0,
    y: 50,
    duration:1,
    delay:.5,
    stagger: 0.6
 })




}



function page2Animation() {
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section-2',
            scroller: 'body',
            markers:true,
            start: 'top 80%',
            end: 'top -10%',
            scrub: 1,
        }
    
    })
    
    tl2.from(".plants-cat", {
        y:-20,
        duration: 0.5,
        opacity:0,
    })
    
    tl2.from('.elem.line1.left', {
        x:-300,
        opacity: 0,
        duration: 2,
    }, "anim")
    
    tl2.from('.elem.line1.right', {
        x:300,
        opacity: 0,
        duration: 1.5,
    }, "anim")
    
    tl2.from('.elem.line2.left', {
        x:-300,
        opacity: 0,
        duration: 2,
    }, "anim1")
    
    tl2.from('.elem.line2.right', {
        x:300,
        opacity: 0,
        duration: 1.5,
    }, "anim1")
}

page1Animation()

page2Animation()






