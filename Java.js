const VisaVarukorg = document.querySelector('.VisaVarukorgKnapp');
const DropDownVarukorg = document.querySelector('.DropdownVarukorg');
const VarukorgLista = document.getElementById('VarukorgLista'); 
const LäggIVarukorgKnappar = document.querySelectorAll('.LäggIVarukorg');
const Sökfält = document.querySelector('.Sökfält');
const VisaSökKnapp = document.querySelector('.VisaSökKnapp');
const SökKnapp = document.querySelector('.SökKnapp');

let varukorg = [];  

VisaVarukorg.addEventListener('click', function() {
    DropDownVarukorg.classList.toggle('active');
});

VisaSökKnapp.addEventListener('click', function() {
    Sökfält.classList.toggle('active');
    SökKnapp.classList.toggle('active');
});

LäggIVarukorgKnappar.forEach(button => {
    button.addEventListener('click', function() {
        const produktNamn = button.getAttribute('data-name');
        const produktPris = button.getAttribute('data-price');
        const produktbild = button.getAttribute('data-image')

        const befintligProdukt = varukorg.find(produkt => produkt.namn === produktNamn);

        if (befintligProdukt) {
            befintligProdukt.antal++;
        } else {
        varukorg.push({
            namn: produktNamn,
            pris: produktPris,
            bild: produktbild,
            antal: 1
        });
    }

        uppdateraVarukorg();
    });
});

function uppdateraVarukorg() {
    VarukorgLista.innerHTML = '';

    if (varukorg.length === 0) {
        const tomMedelande = document.createElement('p');
        tomMedelande.textContent = 'Din varukorg är tom';
        VarukorgLista.appendChild(tomMedelande);
        return;
    }

    varukorg.forEach((produkt, index) => {
        const listItem = document.createElement('li');  
        listItem.style.border = '1px solid #000000'
        listItem.style.backgroundColor = ' #ffffff'
        listItem.style.display = 'flex';
        listItem.style.alignItems = 'center';
        listItem.style.marginRight = '5px';
        listItem.style.marginLeft = '5px';
        listItem.style.width = '95%';

        const produktBild = document.createElement('img');
        produktBild.src = produkt.bild;
        produktBild.alt = produkt.namn;
        produktBild.style.width = '50px';
        produktBild.style.height = 'auto';
        produktBild.style.marginRight = '10px';
        
        const produktText = document.createElement('span');
        produktText.textContent = `${produkt.namn} - ${produkt.pris} kr`;
        produktText.style.fontSize = 'calc(0.09rem + 1vw)';
        produktText.style.marginRight = '10px';

        const produktAntal = document.createElement('span');
        produktAntal.textContent = `${produkt.antal}st`;
        produktAntal.style.fontSize = 'calc(0.09rem + 1vw)';

        const taBortKnapp = document.createElement('button');
        taBortKnapp.textContent = 'Ta bort';
        taBortKnapp.style.marginLeft = '10px';
        taBortKnapp.style.background = 'red';
        taBortKnapp.style.color = 'white';
        taBortKnapp.style.border = 'none';
        taBortKnapp.style.cursor = 'pointer';
        taBortKnapp.style.width = '20%';
        taBortKnapp.style.height = 'auto';

        taBortKnapp.addEventListener('click', function() {
            varukorg.splice(index, 1);
            uppdateraVarukorg();
        });
        listItem.appendChild(produktBild);
        listItem.appendChild(produktText);
        listItem.appendChild(produktAntal);
        listItem.appendChild(taBortKnapp);
        VarukorgLista.appendChild(listItem);
    });
}
uppdateraVarukorg();
