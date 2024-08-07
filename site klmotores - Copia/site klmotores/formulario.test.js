const {validatePassword, checkPassword, checkAge, validateForm} = require('./formulario')

it('Testando as regras das senhas' , () =>{
    
    expect(validatePassword("aaa!@#aa")).toBe(true)
    
})
it('Testando se as senhas são iguais' , () =>{
    
    expect(checkPassword("aaa!@#aa", "aaa!@#aa")).toBe(true)
    
})
it('Testando se idade é maior que 18 anos' , () =>{
    
    expect(checkAge("Dec 25, 2003")).toBe(true)
    
})
it('Testando se foi' , () =>{
    
    expect(validateForm("aaa!@#aa", "aaa!@#aa", "Dec 25, 2003" )).toBe(true)
    
})