export interface OptionProps {
    label: string
    value: string
    gif: string
    imagePop: string
    backgroundImage: string
    logo: string
    learnMoreLink: string
    onClick?: () => void
}

export interface CardListProps {
    cards: OptionProps[]
    handleCardClick: (o: OptionProps, index: number) => void
}

export interface OptionListProps {
    options: OptionProps[]
}
