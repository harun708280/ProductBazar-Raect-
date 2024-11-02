import { toast } from "react-toastify"

const getCardLS=()=>{
    const getCard=localStorage.getItem('card')
    if (getCard) {
        return JSON.parse(getCard)
    }
    return []
}

const addCardLs=(name)=>{
    const getData=getCardLS()
    if (!getData.includes(name)) {
        getData.push(name)
        saveData(getData)
        toast.success('SuccessFully Add to Card',{
            position:'top-center',
            autoClose:3000
        })

        
    }
    else{
        toast.error('this product already add to card',{
            position:'top-center',
            autoClose:3000
        })
    }

}

const saveData=(name)=>{
    const data=JSON.stringify(name)
    localStorage.setItem('card',data)

}
const delateCardLs=(name)=>{
    const getCard=getCardLS()
    const filterCard=getCard.filter(card=>card!==name)
    saveData(filterCard)
    toast.success('SuccessFully Delate')

}
export {getCardLS,addCardLs,delateCardLs}