import { JSX } from 'react'
import { highlight } from 'sugar-high'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'

function Code({ children, ...props }: React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>) {
  // Ensure children is a string
  const codeString = typeof children === 'string' ? children : ''
  const codeHTML = highlight(codeString)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

const components = {
  code: Code
}

export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
