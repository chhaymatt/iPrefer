import { useEffect, useState } from "react"
import { OptionListProps } from "../../interfaces/props"
import Select from "../Select/Select"
import styles from "./CreateYourOwn.module.scss"

const CreateYourOwn: React.FC<OptionListProps> = ({
    options,
}: OptionListProps) => {
    const [value, setValue] = useState<typeof options[0] | undefined>(
        options[0]
    )

    return (
        <div className={styles.Container}>
            <h1>Create your own</h1>
            <h2>This page is development and not working</h2>

            <Select
                options={options}
                value={value}
                onChange={(o) => setValue(o)}
            ></Select>
        </div>
    )
}

export default CreateYourOwn
