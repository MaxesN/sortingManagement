import ReactSelect, { GroupBase, Props } from 'react-select'
import arrowSelect from '../../assets/arrowSelect.svg'

import { WrapperIcon } from './WrapperIcon'

type CustomProps = {
  className?: string
  classNameIcon?: string
  withIcon?: boolean
  image?: string
}

const components = {
  IndicatorSeparator: () => null,
  IndicatorsContainer: () => (
    <img className="tw3-mr-3" src={arrowSelect} alt="arrow" />
  ),
}

const getStyled = (withIcon: boolean) => {
  const styles = {
    placeholder: (defaultStyles: {}) => {
      return {
        ...defaultStyles,
        marginLeft: '40px',
      }
    },
    input: (defaultStyles: {}) => {
      return {
        ...defaultStyles,
        marginLeft: '40px',
      }
    },
    singleValue: (defaultStyles: {}) => {
      return {
        ...defaultStyles,
        marginLeft: '40px',
      }
    },
    menu: (defaultStyles: {}) => {
      return {
        ...defaultStyles,
        'z-index': '50',
      }
    },
    control: (defaultStyles: {}) => {
      return {
        ...defaultStyles,
        border: '2px solid #CBD5E1',
        '&:hover': {
          borderColor: 'none',
        },
        '&:focus': {
          borderColor: 'blue',
        },
        padding: '2px 0px',
        outline: 'none',
        boxShadow: 'none',
      }
    },
  }

  const styleWithoutIcon = {
    menu: (defaultStyles: {}) => {
      return {
        ...defaultStyles,
        'z-index': '50',
      }
    },
    control: (defaultStyles: {}) => {
      return {
        ...defaultStyles,
        border: '2px solid #CBD5E1',
        '&:hover': {
          borderColor: 'none',
        },
        '&:focus': {
          borderColor: 'blue',
        },
        padding: '2px 0px',
        outline: 'none',
        boxShadow: 'none',
      }
    },
  }

  if (withIcon) return styles

  return styleWithoutIcon
}

export const Select = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  withIcon = false,
  className = '',
  classNameIcon = '',
  image,
  ...rest
}: Props<Option, IsMulti, Group> & CustomProps) => {
  if (withIcon)
    return (
      <WrapperIcon
        className={className}
        classNameIcon={classNameIcon}
        image={image}
      >
        <ReactSelect
          {...rest}
          styles={getStyled(withIcon)}
          components={components}
          className="tw3-relative  tw3-w-full"
        />
      </WrapperIcon>
    )
  return (
    <ReactSelect
      {...rest}
      styles={getStyled(withIcon)}
      components={components}
      className={`tw3-w-full  tw3-relative ${className}`}
    />
  )
}
