import React from "react";

export default function SocialNetworkLink({ href, src, title, width='30', height='30'}) {
	return (
		<a href={href} aria-label={title} title={title} target="_blank">
			<img
				src={src}
				alt={title}
				aria-label={title}
				width={width}
				height={height}
				loading="lazy"
			/>
		</a>
	);
}
