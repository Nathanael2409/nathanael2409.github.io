let myImage = document.querySelector('img');

myImage.addEventListener("click", function()
{
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/mon-image.png')
    {
        myImage.setAttribute('src', 'images/2.png');
    } 
    else if (mySrc == 'images/2.png')
    {
        myImage.setAttribute('src', 'images/1.png');
    }
    else if (mySrc == 'images/1.png')
    {
        myImage.setAttribute('src', 'images/3.png');
    }
    else
    {
        myImage.setAttribute('src', 'images/mon-image.png')
    }
});



