    const SökBox = document.querySelector('.SökBox');
    const header = document.querySelector('header');
    const Varukorg = document.querySelector('.Varukorg');
    const Länkar = document.querySelectorAll('a');



    window.addEventListener('scroll', function()
    {

    debounceTimer = setTimeout(function()
    {
        if (window.scrollY > 30)
        {
            header.classList.add('shrunk');
            SökBox.classList.add('shrunk');
            Varukorg.classList.add('shrunk');
            Länkar.forEach(function(link){
                console.log(link);
                link.classList.add('shrunk');
            });

        } else{

            header.classList.remove('shrunk');
            SökBox.classList.remove('shrunk');
            Varukorg.classList.remove('shrunk');
            Länkar.forEach(function(link){
                console.log(link);
                link.classList.remove('shrunk');

        });
        }
    });
});