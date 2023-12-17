import { ReactNode, createContext, useContext, useState } from 'react'

interface IFormContext {
	onHandleNext: () => void
	onHandleBack: () => void
	step: number
}

const FormContext = createContext<IFormContext>({
	onHandleNext: () => {},
	onHandleBack: () => {},
	step: 1
})

interface IProps {
	children: ReactNode
}

export function FormProvider({ children }: IProps) {
	const [step, setStep] = useState(1)

	function onHandleNext() {
		console.log('11')
		setStep(prevValue => prevValue + 1)
	}

	function onHandleBack() {
		setStep(prevValue => prevValue - 1)
	}

	return (
		<FormContext.Provider value={{ onHandleNext, onHandleBack, step }}>
			{children}
		</FormContext.Provider>
	)
}

export function useFormState() {
	return useContext(FormContext)
}
