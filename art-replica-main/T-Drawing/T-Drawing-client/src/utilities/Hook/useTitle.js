import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title= `${title} - T-Drawing`
    },[title])
}
export default useTitle;