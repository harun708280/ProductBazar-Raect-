import { toast } from "react-toastify"

const getFavoriteLs=()=>{
    const getData=localStorage.getItem('favorite')
    if (getData) {
        return JSON.parse(getData)
    }
    return []
}

const addFavoriteLs=(name)=>{
    const getData=getFavoriteLs()
    if (!getData.includes(name)) {
        getData.push(name)
        saveData(getData)
        toast.success('SuccessFully Add Favorite',{
            position:'top-center',
            autoClose:2000,
        })
    }
    else{
        toast.error('Sorry this Product allReady Add Favorite',{
            position:'top-center',
            autoClose:2000,
        })
    }
}

const saveData=(name)=>{
    const data=JSON.stringify(name)
    localStorage.setItem('favorite',data)
}

const delateFavorite=(name)=>{
    const getData=getFavoriteLs()
    const filterData=getData.filter(data=>data!==name)
    saveData(filterData)
    toast.success('SuccessFully Add Favorite',{
        position:'top-center',
        autoClose:2000,
    })
}

export {delateFavorite,addFavoriteLs,getFavoriteLs}