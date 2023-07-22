
import {myData} from '../../data/index.js'

export const formTypes = {
    ADD: 'add',
    EDIT: 'edit'
}

export const formConstructor = (formType,item) => {

    // create form
    const form = document.getElementById('form')
    form.className = 'd-flex flex-column gap-1 p-3'
    form.innerHTML = ''
    
    myData.headings.forEach((d,i) => {
        
        const label = document.createElement('label')
        label.setAttribute('id',d)
        var headingHead = {
                'id' : 'ردیف'  ,
                'Bimar' : 'بیمار',
                'Age' : 'سن' ,
                'Doctor' : 'دکتر' ,
                'ProfBihooshi' : 'متخصص بیهوشی' ,
                'Typeamal' : 'نوع عمل' ,
                'Otagh' : 'اتاق' ,
                'Scrub' : 'اسکراب' ,
                'Circuler' : 'سیرکولر' ,
                'KarshenasBihooshi' : 'کارشناس بیهوشی' ,
                'KarshenasOtasghamal' : 'کارشناس اتاق عمل' ,
                'Time' : 'ساعت' ,
                'Olaviat' : 'اولویت' ,
                'Status' : 'وضعیت' ,

            };
        if(myData.headings[i] == 'Bimar')
            label.innerHTML = 'بیمار';
        else if(myData.headings[i] == 'Age')
            label.innerHTML = 'سن';
        else if(myData.headings[i] == 'Doctor')
            label.innerHTML = 'دکتر';
        else if(myData.headings[i] == 'ProfBihooshi')
            label.innerHTML = 'متخصص بیهوشی';
        else if(myData.headings[i] == 'Typeamal')
            label.innerHTML = 'نوع عمل';
        else if(myData.headings[i] == 'Otagh')
            label.innerHTML = 'اتاق';
        else if(myData.headings[i] == 'Scrub')
            label.innerHTML = 'اسکراب';
        else if(myData.headings[i] == 'Circuler')
            label.innerHTML = 'سیرکولر';
        else if(myData.headings[i] == 'KarshenasBihooshi')
            label.innerHTML = 'کارشناس بیهوشی';
        else if(myData.headings[i] == 'KarshenasOtasghamal')
            label.innerHTML = 'کارشناس اتاق عمل';
        else if(myData.headings[i] == 'Time')
            label.innerHTML = 'ساعت';
        else if(myData.headings[i] == 'Olaviat')
            label.innerHTML = 'اولویت';
        else if(myData.headings[i] == 'Status')
            label.innerHTML = 'وضعیت';
        label.className = "form-label m-0";

        const input = document.createElement('input');


        input.className = 'form-control m-0'
        input.placeholder = d
        input.setAttribute('id',d+"a")

        if (myData.headings[i] === 'id')
            input.setAttribute('type', 'hidden')
        else if (myData.headings[i] == 'Olaviat')
            {
                input.setAttribute('type', 'text');
                input.setAttribute('list', 'sjd1221');     
            }
            else if (myData.headings[i] == 'Status')
            {
                input.setAttribute('type', 'text');
                input.setAttribute('list', 'sss');     
            }
        else
            input.setAttribute('type','text');



        if (formType === formTypes.EDIT)
            input.setAttribute('value', item[i])

        form.innerHTML += label.outerHTML
        form.innerHTML += input.outerHTML
    })

    if (formType === formTypes.ADD) {
        document.querySelector('.modal-title').innerHTML = 'add Item'
        document.querySelector('.modal-btn').value = 'add'
    
    } else if (formType === formTypes.EDIT) {
        document.querySelector('.modal-title').innerHTML = 'edit Item'
        document.querySelector('.modal-btn').value = 'edit'
    }

    return form;
}