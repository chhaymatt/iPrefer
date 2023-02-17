import { useEffect, useRef, useState } from "react"
import { OptionProps } from "../../interfaces/props"
import styles from "./Select.module.scss"

type MultipleSelectProps = {
    multiple: true
    value: OptionProps[]
    onChange: (value: OptionProps[]) => void
}

type SingleSelectProps = {
    multiple?: false
    value?: OptionProps
    onChange: (value: OptionProps | undefined) => void
}

type SelectProps = {
    options: OptionProps[]
} & (SingleSelectProps | MultipleSelectProps)

const Select = ({ multiple, onChange, options, value }: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [highlightedIndex, setHighlightedIndex] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)

    const clearOptions = () => {
        multiple ? onChange([]) : onChange(undefined)
    }

    const selectOption = (option: OptionProps) => {
        if (multiple) {
            if (value.includes(option)) {
                onChange(value.filter((o) => o !== option))
            } else {
                onChange([...value, option])
            }
        } else {
            if (option !== value) onChange(option)
        }
    }

    const isOptionSelected = (option: OptionProps) => {
        return multiple ? value.includes(option) : option === value
    }

    // Reset highlighted index
    useEffect(() => {
        if (isOpen) setHighlightedIndex(0)
    }, [isOpen])

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.target != containerRef.current) return
            switch (e.code) {
                case "Enter":
                case "Space":
                    setIsOpen((prev) => !prev)
                    if (isOpen) selectOption(options[highlightedIndex])
                    break
                case "ArrowUp":
                case "ArrowDown": {
                    if (!isOpen) {
                        setIsOpen(true)
                        break
                    }

                    const newValue =
                        highlightedIndex + (e.code === "ArrowDown" ? 1 : -1)
                    if (newValue >= 0 && newValue < options.length) {
                        setHighlightedIndex(newValue)
                    }
                    break
                }
                case "Escape":
                    setIsOpen(false)
                    break
            }
        }
        containerRef.current?.addEventListener("keydown", handler)

        return () => {
            containerRef.current?.removeEventListener("keydown", handler)
        }
    }, [isOpen, highlightedIndex, options])

    return (
        <div
            ref={containerRef}
            onBlur={() => setIsOpen(false)}
            onClick={() => setIsOpen((prev) => !prev)}
            tabIndex={0}
            className={styles.Container}
        >
            <span className={styles.Value}>
                {multiple
                    ? value.map((v) => (
                          <button
                              key={v.value}
                              onClick={(e) => {
                                  e.stopPropagation()
                                  selectOption(v)
                              }}
                              className={styles["Option-Badge"]}
                          >
                              {v.label}
                              <span className={styles["Remove-Btn"]}>
                                  &times;
                              </span>
                          </button>
                      ))
                    : value?.label}
            </span>
            <button
                onClick={(e) => {
                    e.stopPropagation()
                    clearOptions()
                }}
                className={styles["Clear-Btn"]}
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
                            // setIsOpen(false)
                        }}
                        onMouseEnter={() => setHighlightedIndex(index)}
                        key={option.value}
                        className={`${styles.Option} ${
                            isOptionSelected(option) ? styles.Selected : ""
                        } ${
                            index === highlightedIndex ? styles.Highlighted : ""
                        }`}
                    >
                        {multiple && (
                            <span className={styles.Checked}>
                                {isOptionSelected(option) ? (
                                    <i className="fa-solid fa-square-check"></i>
                                ) : (
                                    <i className="fa-regular fa-square"></i>
                                )}
                            </span>
                        )}
                        <span>{option.label}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Select
