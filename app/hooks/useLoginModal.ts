import {create} from "zustand"

interface loginModalStore {
    isOpen: boolean,
    open: () => void;
    close: () => void;
}

const useLoginModal = create<loginModalStore>((set) => ({
    isOpen: false,
    open: () => set({isOpen: true}),
    close: () => set({isOpen:false})
}))


export default useLoginModal