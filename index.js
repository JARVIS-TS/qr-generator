/* My First Backend Project Using Node.Js!
 A qr code generator. */
import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';

inquirer
    .prompt([
        
       { message:"Enter your url : ",
        name:"URL",
    },
    ])
    .then((answers) => {
        const url = answers.URL;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('qr_image.png'));
        fs.writeFile("url.txt",url , (err)=>{
            if(err) throw err;
            else console.log("QR is generated and url is saved");
        });

    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });


