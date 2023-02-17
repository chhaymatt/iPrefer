import { useEffect, useState } from "react"
import { OptionListProps, OptionProps } from "../../interfaces/props"
import categories from "../../services/categories"
import games from "../../services/games"
import food from "../../services/food"
import Container from "../Container/Container"
import Select from "../Select/Select"
import styles from "./CreateYourOwn.module.scss"

const CreateYourOwn: React.FC<OptionListProps> = ({
    options,
}: OptionListProps) => {
    const [value1, setValue1] = useState<OptionProps[]>([options[0]])
    const [category, setCategory] = useState<OptionProps | undefined>(
        categories[0]
    )

    const [cardListAppear, setCardListAppear] = useState(false)

    useEffect(() => {}, [value1, category])

    const handleButtonClick = () => {
        console.log(value1)
        if (value1.length >= 2) {
            if (cardListAppear) {
                setCardListAppear(false)
            }
            setCardListAppear(true)
        }
    }

    return (
        <div className={styles.Container}>
            <h1>Create Your Own</h1>
            <h2>This page is in development and not working</h2>
            <h3>Known Issues</h3>
            <ul className={styles.IssuesList}>
                <li>
                    Select Component
                    <ul>
                        <li>
                            Optional attribute to auto close dropdown after
                            selecting an option
                        </li>
                        <li>Optional attribute to hide the clear button</li>
                    </ul>
                </li>
                <li>
                    Select options menu should update if the category changes
                </li>
                <li>
                    CardList component should reload if there are changes to
                    select options
                </li>
            </ul>
            <h3>Choose Category</h3>
            <Select
                options={categories}
                value={category}
                onChange={(o) => setCategory(o)}
            />
            <h3>{`Select options`}</h3>
            <Select
                multiple
                options={options}
                value={value1}
                onChange={(o) => setValue1(o)}
            />
            <button onClick={handleButtonClick}>Save MultiSelect</button>
            {cardListAppear && <Container key="games" options={value1} />}
            <br />
        </div>
    )
}

export default CreateYourOwn
