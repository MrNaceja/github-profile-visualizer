import { Dispatch, SetStateAction } from 'react';
import * as Styled                  from './styled'

interface IFiltersProps {
    /** Filtros para serem renderizados */
    filters: IFilter[]
}

/**
 * Modelo de filtro para ser renderizado e controlado.
 */
export interface IFilter {
    group: string,
    values: string[],
    valuesState: string[],
    setValuesState: Dispatch<SetStateAction<string[]>>
}

/**
 * Componente para controle de Filtros.
 */
export default function Filters({ filters} : IFiltersProps) {
    return (
        <Styled.Container>
            <Styled.Filter>
                <Styled.FilterButton />
                <Styled.FilterSelect>
                    <Styled.FilterModal>
                        {
                            filters.map(({ group, values, valuesState, setValuesState } : IFilter, index) => (
                                <div key={`${group}_group_${index}`}>
                                    <Styled.FilterSelectItemLabelGroup key={group}>{group}</Styled.FilterSelectItemLabelGroup>
                                    {
                                        values.map(value => {
                                            const isCheckedValue = valuesState.includes(value)
                                            return (
                                                <Styled.FilterSelectItem 
                                                    key={group + '_' + value + '_item'}
                                                    checked={isCheckedValue}
                                                    onCheckedChange={(check) => {
                                                    check 
                                                    ? setValuesState(valueState => [...valueState, value])
                                                    : setValuesState(valueState => [...valueState.filter(valueInState => valueInState != value)])
                                                }}
                                            >
                                                <Styled.FilterSelectItemIcon check={isCheckedValue} />
                                                { value }
                                            </Styled.FilterSelectItem>
                                            )
                                        })
                                    }
                                    { (filters.length > 1 && index < filters.length - 1) && <Styled.FilterSelectItemSeparator key={group + '_separator'}/>}
                                </div>
                            ))
                        }
                    </Styled.FilterModal>
                </Styled.FilterSelect>
            </Styled.Filter>
        </Styled.Container>
    )
}