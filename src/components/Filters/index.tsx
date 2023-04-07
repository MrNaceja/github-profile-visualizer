import { CaretDown, CheckSquare, Square } from 'phosphor-react';

import * as Styled from './styled'
import { useState } from 'react';

export default function Filters() {

    const languages = ['JS', 'React', 'Java', 'PHP']
    const [languagesToFilter, setLanguagesToFilter] = useState(['Java'])

    return (
        <Styled.Container>
            <Styled.Filter>
                <Styled.FilterIndicator>
                    <CaretDown size={20} weight="bold"/> Type
                </Styled.FilterIndicator>
                <Styled.FilterModal>
                    <Styled.FilterSelect>
                    {
                        languages.map((lang, id) => {
                            const isCheckedToFilter = languagesToFilter.includes(lang)
                            return (
                                <Styled.FilterSelectItem 
                                    key={id}
                                    checked={isCheckedToFilter}
                                >
                                { isCheckedToFilter /** transformar isso em componente estilizado validadno o checked */
                                    ? <CheckSquare weight="fill" size={20} /> 
                                    : <Square weight="bold" size={20} />
                                }
                                { lang }
                                </Styled.FilterSelectItem>
                            )
                        })
                    }   
                    </Styled.FilterSelect>
                </Styled.FilterModal>
            </Styled.Filter>
            {/* <Styled.Filter>
                <Styled.FilterIndicator>
                    <CaretDown size={20} weight="bold"/> Language
                </Styled.FilterIndicator>
                <Styled.FilterModal>
                    <Styled.FilterSelect>
                        <Styled.FilterSelectItem>
                            <Styled.FilterSelectItemIcon>
                                <Check size={5} />
                            </Styled.FilterSelectItemIcon>
                            language
                        </Styled.FilterSelectItem>
                    </Styled.FilterSelect>
                </Styled.FilterModal>
            </Styled.Filter> */}
        </Styled.Container>
    )
}