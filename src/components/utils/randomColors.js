const randomBGColor=()=> {
    const x=Math.floor(Math.random()*256)
    const y=Math.floor(Math.random()*256)
    const z=Math.floor(Math.random()*256) 
    const bg_color=`rgb(${x},${y},${z})`;
    const brightness = Math.round(((parseInt(x) * 299) +
                      (parseInt(y) * 587) +
                      (parseInt(z) * 114)) / 1000);
   const text_color = (brightness > 125) ? 'black' : 'white';
    // document.getElementById(id).style.background=bg_color;
    // document.getElementById(id).style.color=text_color;
   
    // bgColor=bg_color
    // textColor=text_color

    return bg_color
  }

  const textColor=(color)=> {
    const x=Math.floor(Math.random()*256)
    const y=Math.floor(Math.random()*256)
    const z=Math.floor(Math.random()*256) 
    const bg_color=`rgb(${x},${y},${z})`;
    const brightness = Math.round(((parseInt(x) * 299) +
                      (parseInt(y) * 587) +
                      (parseInt(z) * 114)) / 1000);
   const text_color = (brightness > 125) ? 'black' : 'white';
    // document.getElementById(id).style.background=bg_color;
    // document.getElementById(id).style.color=text_color;
   
    // bgColor=bg_color
    // textColor=text_color

    return bg_color
  }