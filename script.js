//your JS code here. If required.
 //Promises and Chains
        const inputAge = document.getElementById("age")
        const inputName = document.getElementById("name")
        const btn = document.getElementById("button")

        btn.addEventListener("click",(e)=>{
            e.preventDefault()
            let age = inputAge.value
            let name = inputName.value

            function hello(name,age){
                    
                  return new Promise((resolve, reject)=>{
                        if(age>18){
                        setTimeout(()=>{
                            resolve(`Welcome, ${name} You can vote.`)
                        },4000)
                    }
                    else{
                    reject(`Oh sorry ${name} You aren't old enough.`)
                    }
                    })
                }
            
            if(age == "" || name == ""){
                alert("inputs cannot be empty.")
            }
            else{
                let p1 = hello(name,age)
                p1.then((data)=>alert(data)).catch((err)=>alert(err))
        }

      
        })
