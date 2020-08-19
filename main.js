document.getElementById('Match-Success').style.display = "none";
            document.getElementById('Match-Failed').style.display = "none";
            
        let GenerateButton = document.getElementById('Generate-Button').addEventListener('click',function(){
            let GeneratePin = Math.floor(1000 + Math.random()*9000);
            document.getElementById('Generate-Pin').value = GeneratePin;
            document.getElementById('Match-Pin').value = "";
            document.getElementById('Submit-Button').disabled = false;
            document.getElementById('Match-Success').style.display = "none";
            document.getElementById('Match-Failed').style.display = "none";
            
        })

        const number = document.getElementsByClassName('number');
        for (let i = 0; i < number.length; i++) {
            const element = number[i];
            element.addEventListener('click',function(){
                let Output = document.getElementById('Match-Pin').value;
                Output = Output + this.id;
                // console.log(Output);
                document.getElementById('Match-Pin').value= Output;
            })
        }
        // operator handle

        const operator = document.getElementsByClassName('operator');
        // console.log(Number);
        for (let i = 0; i < operator.length; i++) {
            const element = operator[i];
            element.addEventListener('click',function(){
                if(this.id =='C'){
                    document.getElementById('Match-Pin').value= "" ;
                }
                if(this.id == 'Backspace'){
                   let MatchPin = document.getElementById('Match-Pin').value;
                   MatchPin = MatchPin.substr(0,MatchPin.length -1);
                   document.getElementById('Match-Pin').value = MatchPin;
                }

            })
            
        }

        // Submit Match

        document.getElementById('Submit-Button').addEventListener('click',function(){
            const GenPin = document.getElementById('Generate-Pin').value;
            const MatchPin = document.getElementById('Match-Pin').value;
            if (GenPin == MatchPin) {
                document.getElementById('Generate-Pin').value = '';
                document.getElementById('Match-Pin').value = '';
                document.getElementById('Submit-Button').disabled = true;
                document.getElementById('Match-Success').style.display = "block";
            }
            else if (GenPin != MatchPin) {
                document.getElementById('Generate-Pin').value = '';
                document.getElementById('Match-Pin').value = '';
                document.getElementById('Submit-Button').disabled = true;
                document.getElementById('Match-Failed').style.display = "block";
            }

        })