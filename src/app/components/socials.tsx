/** @format */
"use client";
import React from "react";
import Link from "next/link";

const Socials = () => {
	return (
		<div className="flex md:flex-col flex-row gap-5 z-10">
			<Link href="https://www.x.com/" target="_blank">
				<button className="bg-transparent outline-none border-0">
					<svg
						width="32"
						height="32"
						viewBox="0 0 32 32"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<rect
							width="32"
							height="32"
							rx="16"
							fill="black"
							fillOpacity="0.2"
						/>
						<path
							d="M21.1759 7H23.9362L17.9062 14.625L25 25H19.4452L15.0955 18.707L10.1176 25H7.3546L13.8049 16.845L7 7H12.6952L16.6282 12.752L21.1759 7ZM20.2075 23.172H21.7375L11.8636 8.732H10.222L20.2075 23.172Z"
							fill="white"
						/>
					</svg>
				</button>
			</Link>
			<Link href="https://telegram.org/" target="_blank">
				<button className="bg-transparent outline-none border-0">
					<svg
						width="32"
						height="32"
						viewBox="0 0 32 32"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<rect
							width="32"
							height="32"
							rx="16"
							fill="black"
							fillOpacity="0.2"
						/>
						<path
							d="M23.785 8.1052L7.84049 14.6219C6.75234 15.0851 6.75863 15.7285 7.64085 16.0154L11.7344 17.3689L21.2058 11.0352C21.6537 10.7464 22.0629 10.9017 21.7265 11.2182L14.0528 18.5584H14.051L14.0528 18.5594L13.7705 23.0315C14.1841 23.0315 14.3667 22.8304 14.5987 22.5931L16.5871 20.5438L20.7229 23.7817C21.4855 24.2268 22.0332 23.998 22.2229 23.0334L24.9379 9.47202C25.2158 8.29107 24.5126 7.75635 23.785 8.1052Z"
							fill="white"
						/>
					</svg>
				</button>
			</Link>
			<Link href="https://discord.com/" target="_blank">
				<button className="bg-transparent outline-none border-0">
					<svg
						width="32"
						height="32"
						viewBox="0 0 32 32"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<rect
							width="32"
							height="32"
							rx="16"
							fill="black"
							fillOpacity="0.2"
						/>
						<path
							d="M22.2303 10.1635C21.0902 9.62113 19.8559 9.22748 18.5702 9.00004C18.5589 8.99967 18.5477 9.00183 18.5373 9.00637C18.527 9.0109 18.5177 9.0177 18.5102 9.02628C18.3559 9.31496 18.1759 9.69111 18.0559 9.97978C16.6921 9.76984 15.3052 9.76984 13.9415 9.97978C13.8215 9.68236 13.6415 9.31496 13.4786 9.02628C13.47 9.00879 13.4443 9.00004 13.4186 9.00004C12.1329 9.22748 10.9071 9.62113 9.7585 10.1635C9.74993 10.1635 9.74136 10.1722 9.73279 10.181C7.40129 13.7413 6.75842 17.2054 7.07557 20.6345C7.07557 20.652 7.08414 20.6695 7.10129 20.6782C8.64419 21.8329 10.1271 22.5327 11.5928 22.9964C11.6186 23.0051 11.6443 22.9964 11.6528 22.9789C11.9957 22.4978 12.3043 21.9904 12.57 21.4568C12.5872 21.4218 12.57 21.3868 12.5357 21.378C12.0471 21.1856 11.5843 20.9582 11.13 20.6957C11.0957 20.6782 11.0957 20.6257 11.1214 20.5995C11.2157 20.5295 11.31 20.4508 11.4043 20.3808C11.4214 20.3633 11.4471 20.3633 11.4643 20.3721C14.4129 21.7455 17.593 21.7455 20.5074 20.3721C20.5245 20.3633 20.5502 20.3633 20.5674 20.3808C20.6617 20.4595 20.7559 20.5295 20.8502 20.6083C20.8845 20.6345 20.8845 20.687 20.8417 20.7045C20.3959 20.9757 19.9245 21.1943 19.4359 21.3868C19.4016 21.3955 19.3931 21.4393 19.4016 21.4655C19.6759 21.9991 19.9845 22.5065 20.3188 22.9876C20.3445 22.9964 20.3702 23.0051 20.3959 22.9964C21.8703 22.5327 23.3532 21.8329 24.8961 20.6782C24.9132 20.6695 24.9218 20.652 24.9218 20.6345C25.2989 16.6718 24.296 13.2339 22.2646 10.181C22.256 10.1722 22.2474 10.1635 22.2303 10.1635ZM13.0157 18.5438C12.1329 18.5438 11.3957 17.7128 11.3957 16.6893C11.3957 15.6658 12.1157 14.8348 13.0157 14.8348C13.9243 14.8348 14.6444 15.6745 14.6358 16.6893C14.6358 17.7128 13.9158 18.5438 13.0157 18.5438ZM18.9902 18.5438C18.1073 18.5438 17.3701 17.7128 17.3701 16.6893C17.3701 15.6658 18.0902 14.8348 18.9902 14.8348C19.8988 14.8348 20.6188 15.6745 20.6102 16.6893C20.6102 17.7128 19.8988 18.5438 18.9902 18.5438Z"
							fill="white"
						/>
					</svg>
				</button>
			</Link>
			<Link href="https://www.youtube.com/" target="_blank">
				<button className="bg-transparent outline-none border-0">
					<svg
						width="32"
						height="32"
						viewBox="0 0 32 32"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<rect
							width="32"
							height="32"
							rx="16"
							fill="black"
							fillOpacity="0.2"
						/>
						<path
							d="M24.6243 11.8745C24.5219 11.5115 24.321 11.1805 24.0417 10.9146C23.7625 10.6487 23.4147 10.4572 23.0333 10.3592C21.629 10 16 10 16 10C16 10 10.371 10 8.96674 10.3573C8.58509 10.4549 8.23715 10.6463 7.95787 10.9123C7.67859 11.1783 7.4778 11.5095 7.37567 11.8726C7 13.2102 7 16 7 16C7 16 7 18.7898 7.37567 20.1255C7.58259 20.8631 8.1933 21.4439 8.96674 21.6408C10.371 22 16 22 16 22C16 22 21.629 22 23.0333 21.6408C23.8087 21.4439 24.4174 20.8631 24.6243 20.1255C25 18.7898 25 16 25 16C25 16 25 13.2102 24.6243 11.8745ZM14.2121 18.5605V13.4395L18.8728 15.9809L14.2121 18.5605Z"
							fill="white"
						/>
					</svg>
				</button>
			</Link>
			<Link href="https://www.tiktok.com/foryou?lang=en" target="_blank">
				<button className="bg-transparent outline-none border-0">
					<svg
						width="32"
						height="32"
						viewBox="0 0 32 32"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<rect
							width="32"
							height="32"
							rx="16"
							fill="black"
							fillOpacity="0.2"
						/>
						<path
							d="M22.008 11.0631C21.8834 10.9968 21.7621 10.9241 21.6445 10.8452C21.3029 10.6128 20.9897 10.339 20.7117 10.0296C20.0151 9.2097 19.755 8.378 19.6599 7.79624H19.6632C19.5836 7.31242 19.6164 7 19.6221 7H16.4511V19.6174C16.4511 19.7862 16.4511 19.9543 16.4446 20.1197C16.4446 20.14 16.4421 20.1586 16.4413 20.1814C16.4413 20.1898 16.4413 20.2 16.4388 20.2093V20.2169C16.4055 20.6694 16.2647 21.1067 16.0286 21.4901C15.7925 21.8735 15.4685 22.1913 15.0851 22.4156C14.6851 22.6498 14.2326 22.7726 13.7724 22.7719C12.2956 22.7719 11.0978 21.5324 11.0978 20.0015C11.0978 18.4699 12.2956 17.2303 13.7724 17.2303C14.0522 17.2303 14.3303 17.2759 14.5961 17.3654L14.6002 14.042C13.7929 13.9348 12.9728 14.001 12.1916 14.2365C11.4104 14.4719 10.6852 14.8714 10.0616 15.4099C9.51503 15.8984 9.05553 16.4813 8.70374 17.1324C8.57001 17.3696 8.06462 18.3246 8.0039 19.8732C7.96534 20.7513 8.22214 21.6632 8.34439 22.039V22.0474C8.42069 22.2687 8.71933 23.0252 9.20503 23.6627C9.5967 24.1744 10.0595 24.6239 10.5784 24.9968V24.9884L10.5858 24.9968C12.12 26.0691 13.8225 25.9991 13.8225 25.9991C14.117 25.9864 15.104 25.9991 16.2247 25.4528C17.4677 24.8465 18.1749 23.9439 18.1749 23.9439C18.627 23.4044 18.9866 22.7897 19.2382 22.126C19.5253 21.3491 19.6205 20.4187 19.6205 20.0471V13.3522C19.6591 13.3758 20.1718 13.7245 20.1718 13.7245C20.1718 13.7245 20.9102 14.2117 22.0613 14.5284C22.8867 14.7538 24 14.8019 24 14.8019V11.5621C23.6103 11.606 22.8186 11.4794 22.0072 11.0639"
							fill="white"
						/>
					</svg>
				</button>
			</Link>
		</div>
	);
};

export default Socials;