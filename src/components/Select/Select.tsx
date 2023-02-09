import { useEffect, useState } from "react"
import { OptionProps } from "../../interfaces/props"
import styles from "./Select.module.scss"

type SelectProps = {
    options: OptionProps[]
    onChange: (value: OptionProps | undefined) => void
    value?: OptionProps
}

const Select = ({ onChange, options, value }: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [highlightedIndex, setHighlightedIndex] = useState(0)

    const clearOptions = () => {
        onChange(undefined)
    }

    const selectOption = (option: OptionProps) => {
        if (option !== value) onChange(option)
    }

    const isOptionSelected = (option: OptionProps) => {
        return option === value
    }

    // Reset highlighted index
    useEffect(() => {
        if (isOpen) setHighlightedIndex(0)
    }, [isOpen])

    return (
        <div
            onBlur={() => setIsOpen(false)}
            onClick={() => setIsOpen((prev) => !prev)}
            tabIndex={0}
            className={styles.Container}
        >
            <span className={styles.Value}>{value?.label}</span>
            <button
                onClick={(e) => {
                    e.stopPropagation()
                    clearOptions()
                }}
                className={styles["Clear-btn"]}
            >
                &times;
            </button>
            <div className={styles.Divider}></div>
            <div className={styles.Caret}></div>
            <ul className={`${styles.Options} ${isOpen ? styles.Show : ""}`}>
                {options.map((option, index) => (
                    <li
                        onClick={(e) => {
                            e.stopPropagation()
                            selectOption(option)
                            setIsOpen(false)
                        }}
                        onMouseEnter={() => setHighlightedIndex(index)}
                        key={option.value}
                        className={`${styles.Option} ${
                            isOptionSelected(option) ? styles.Selected : ""
                        } ${
                            index === highlightedIndex ? styles.Highlighted : ""
                        }`}
                    >
                        {option.label}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Select
