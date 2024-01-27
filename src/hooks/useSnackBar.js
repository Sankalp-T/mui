import { useState, useEffect } from "react";

export function useSnackbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState();
    const [type, setType] = useState("success");

    useEffect(() => {
        if (isOpen === true) {
            setTimeout(() => {
                setIsOpen(false);
            }, 3000);
        }
    }, [isOpen]);

    const openSnackBar = (msg = 'Something went wrong...', type = "success") => {
        setMessage(msg)
        setType(type);
        setIsOpen(true);
    }

    return { isOpen, message, type, openSnackBar }
}