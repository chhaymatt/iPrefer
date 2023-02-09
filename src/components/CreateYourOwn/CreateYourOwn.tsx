import { useEffect, useState } from "react"
import { OptionListProps, OptionProps } from "../../interfaces/props"
import Select from "../Select/Select"
import styles from "./CreateYourOwn.module.scss"

const CreateYourOwn: React.FC<OptionListProps> = ({
    options,
}: OptionListProps) => {
    const [value1, setValue1] = useState<OptionProps[]>([options[0]])
    const [value2, setValue2] = useState<OptionProps | undefined>(options[0])

    useEffect(() => {
        console.log(value1)
        console.log(value2)
    }, [value1, value2])

    return (
        <div className={styles.Container}>
            <h1>Create your own</h1>
            <h2>This page is in development and not working</h2>
            <h3>Multi Select</h3>
            <Select
                multiple
                options={options}
                value={value1}
                onChange={(o) => setValue1(o)}
            />
            <br />
            <h3>Single Select</h3>
            <Select
                options={options}
                value={value2}
                onChange={(o) => setValue2(o)}
            />
        </div>
    )
}

export default CreateYourOwn
