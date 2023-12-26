"use client";
import React, { useState } from "react";
import { CldImage, CldUploadWidget } from "next-cloudinary";

interface CloudinaryResult {
	public_id: string;
}

const UploadPage = () => {
	const [publicId, setPublicId] = useState("");

	return (
		<>
			{publicId && (
				<CldImage src={publicId} alt="cloud image" width={200} height={200} />
			)}
			<CldUploadWidget
				options={{ sources: ["local"], multiple: false, maxFiles: 5 }}
				uploadPreset="n96e6o89"
				onUpload={(result) => {
					console.log(result);
					if (result.event !== "success") return;
					const info = result.info as CloudinaryResult;
					setPublicId(info.public_id);
				}}
			>
				{({ open }) => {
					return (
						<button className="btn btn-primary" onClick={() => open()}>
							Upload an Image
						</button>
					);
				}}
			</CldUploadWidget>
		</>
	);
};

export default UploadPage;
