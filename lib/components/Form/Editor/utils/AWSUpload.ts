// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleUpload = async (files: any) => {
  try {
    const res = await fetch('/api/aws', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: files.name,
        type: files.type,
      }),
    })

    const { url } = await res.json()

    const fileUpload = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': files.type,
      },
      body: files,
    })

    if (!fileUpload.ok) {
      throw new Error('Failed to upload file')
    }
  } catch (err) {
    console.error(err)
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const removeImage = async (file: any) => {
  const fileName = file.match(/uploadedImage\d+/)

  if (fileName) {
    try {
      await fetch('/api/aws', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fileName[0],
        }),
      })
    } catch (error: unknown) {
      console.log(error)
    }
  }
}
