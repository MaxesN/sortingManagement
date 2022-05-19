import { FC } from 'react'
import Dropzone, { FileWithPath } from 'react-dropzone'

type Props = {
  file: FileWithPath[]
  onChangeFile: (file: FileWithPath[]) => void
}

export const DropZoneCustom: FC<Props> = ({ file, onChangeFile }) => {
  return (
    <Dropzone onDrop={(item) => onChangeFile(item)}>
      {({ getRootProps, getInputProps }) => (
        <section className="tw3-border-2 tw3-rounded-md tw3-border-slate-300 tw3-px-3 tw3-py-5">
          <div
            className={`tw3-flex tw3-justify-center tw3-mb-4 ${
              file.length === 0 ? 'tw3-hidden' : ''
            }`}
          >
            {file.map((i) => (
              <div key={i.size}>{i.name}</div>
            ))}
          </div>
          <div
            className="tw3-max-w-[260px] tw3-outline-none tw3-select-none tw3-cursor-pointer tw3-mx-auto tw3-border-2 tw3-border-dotted tw3-text-center tw3-p-2"
            {...getRootProps()}
          >
            <input className="tw3-outline-none" {...getInputProps()} />
            <p className="tw3-text-slate-400 tw3-text-sm">
              Tempkite failus arba paspauskite
            </p>
          </div>
        </section>
      )}
    </Dropzone>
  )
}
