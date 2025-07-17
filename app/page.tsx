import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function HomePage() {
	return (
		<div className='min-h-screen bg-white'>
			<section className='py-16'>
				<div className='container mx-auto px-4'>
					<div className='flex flex-col justify-center content-center'>
						<div className='w-full flex justify-center '>
							<h1 className='scroll-m-20 text-center text-4xl md:text-6xl font-extrabold tracking-tight text-balance'>
								Sober In Toronto
							</h1>
						</div>
						<div className='w-full flex justify-center'>
							<p className='text-center text-muted-foreground text-xl mt-4'>
								A weekly newsletter for Toronto&apos;s sober community navigating the
								reality of early recovery—because you're not broken, you&apos;re
								healing
							</p>
						</div>
						<div className='w-full flex justify-center content-center'>
							<ul className='my-6 ml-6 [&>li]:mt-2'>
								<li className='flex items-start'>
									<span className='mr-2'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
											className='lucide lucide-check-icon lucide-check mt-0.5 h-5 w-5 flex-shrink-0 text-primary'
										>
											<path d='M20 6 9 17l-5-5' />
										</svg>
									</span>
									Real recovery stories from Toronto locals at every stage (30
									days to 2+ years)
								</li>
								<li className='flex items-start'>
									<span className='mr-2'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
											className='lucide lucide-check-icon lucide-check mt-0.5 h-5 w-5 flex-shrink-0 text-primary'
										>
											<path d='M20 6 9 17l-5-5' />
										</svg>
									</span>
									Science-backed insights on dopamine healing and anhedonia
									recovery
								</li>
								<li className='flex items-start'>
									<span className='mr-2'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
											className='lucide lucide-check-icon lucide-check mt-0.5 h-5 w-5 flex-shrink-0 text-primary'
										>
											<path d='M20 6 9 17l-5-5' />
										</svg>
									</span>
									Sober social events and connection opportunities across the
									GTA
								</li>
								<li className='flex items-start'>
									<span className='mr-2'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
											className='lucide lucide-check-icon lucide-check mt-0.5 h-5 w-5 flex-shrink-0 text-primary'
										>
											<path d='M20 6 9 17l-5-5' />
										</svg>
									</span>
									Identity reconstruction tools that actually work
								</li>
								<li className='flex items-start'>
									<span className='mr-2'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
											className='lucide lucide-check-icon lucide-check mt-0.5 h-5 w-5 flex-shrink-0 text-primary'
										>
											<path d='M20 6 9 17l-5-5' />
										</svg>
									</span>
									No toxic positivity. Just honest, practical guidance
								</li>
							</ul>
						</div>
						<div className='flex justify-center content-center'>
							<iframe
								src='https://generalistbits.substack.com/embed'
								className='w-full md:w-1/2'
							></iframe>
						</div>
					</div>
				</div>
			</section>
			<section className='py-16 bg-accent'>
				<div className='container mx-auto px-4'>
					<h1 className='mb-12 scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance'>
						Does This Sound Familiar?
					</h1>
					<div className='grid grid-cols-1 gap-6'>
						<Card className='border-l-4 border-l-destructive'>
							<CardHeader>
								<CardTitle className='text-destructive scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
									You feel like a completely different person
								</CardTitle>
								<CardDescription className='text-black text-lg'>
									Quitting alcohol feels like losing 70% of yourself. You&apos;re
									mourning the person you were when drinking, and you don&apos;t
									recognize who you are without it. The identity you built
									around alcohol is gone, and you&apos;re left feeling hollow.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<blockquote className='text-lg text-muted-foreground border-l-2 pl-6 italic'>
								&ldquo;I feel like a completely different person... Before I drank I
									had joy... But it&apos;s all gone.&rdquo;
								</blockquote>
							</CardContent>
						</Card>
						<Card className='border-l-4 border-l-destructive'>
							<CardHeader>
								<CardTitle className='text-destructive scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
									Your brain feels like &ldquo;Grey Static&rdquo;
								</CardTitle>
								<CardDescription className='text-black text-lg'>
									You wake up each day and nothing feels rewarding anymore.
									Activities that used to bring joy now feel flat and empty.
									You&apos;re not seeking happiness—you&apos;re just seeking health and
									sanity.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<blockquote className='text-lg text-muted-foreground border-l-2 pl-6 italic'>
								&ldquo;My whole brain was just grey static. I slept 16 hours a day
									for about 6 months.&rdquo;
								</blockquote>
							</CardContent>
						</Card>
						<Card className='border-l-4 border-l-destructive'>
							<CardHeader>
								<CardTitle className='text-destructive scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
									Social life feels impossible
								</CardTitle>
								<CardDescription className='text-black text-lg'>
									You miss those tipsy deep talks with friends, moments that
									felt romantic and therapeutic. Now you don&apos;t feel the need to
									go out and talk to people. The social rituals that once
									brought connection are gone, and you&apos;re struggling to find
									replacements.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<blockquote className='text-lg text-muted-foreground border-l-2 pl-6 italic'>
									"Those nights with friends at home or in a cozy bar... almost
									had something romantic and therapeutic... that sweet little
									escape... won&apos;t be the table I sit at anymore.&rdquo;
								</blockquote>
							</CardContent>
						</Card>
						<Card className='mt-4'>
							<CardHeader>
								<CardTitle className='text-center scroll-m-20 pb-2 text-2xl font-semibold tracking-tight '>
									Here&apos;s What Nobody Tells You
								</CardTitle>
								<CardDescription className='text-lg'>
									This isn&apos;t a willpower problem. This isn&apos;t about &ldquo;just
									thinking positive.&rdquo; Your brain is literally rewiring itself,
									and the anhedonia, identity loss, and social struggles are
									normal parts of neurochemical recovery. You need a community
									that understands the science AND the struggle.
								</CardDescription>
							</CardHeader>
						</Card>
					</div>
				</div>
			</section>
			<section className='py-16 bg-white'>
				<div className='container mx-auto px-4'>
					<h1 className='mb-12 scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance'>
						Imagine This Instead...
					</h1>
					<div className='grid grid-cols-1 gap-6'>
						<Card className='border-l-4 border-l-primary'>
							<CardHeader>
								<CardTitle className='text-primary scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
									Your brain starts to light up again
								</CardTitle>
								<CardDescription className='text-black text-lg'>
									You understand why you felt like &ldquo;grey static&rdquo; and you have
									practical tools to help your dopamine system heal. Small
									pleasures start returning, a good coffee, a sunset, a friend&apos;s
									laugh. You&apos;re not just surviving early recovery, you&apos;re
									actively participating in your healing.
								</CardDescription>
							</CardHeader>
						</Card>
						<Card className='border-l-4 border-l-primary'>
							<CardHeader>
								<CardTitle className='text-primary scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
									You rebuild your identity with intention
								</CardTitle>
								<CardDescription className='text-black text-lg'>
									Instead of mourning who you were, you&apos;re excited about who
									you&apos;re becoming. You have a clear process for identity
									reconstruction that doesn&apos;t rely on toxic positivity. You&apos;re
									both the marble and the sculptor, and you finally have the
									tools
								</CardDescription>
							</CardHeader>
						</Card>
						<Card className='border-l-4 border-l-primary'>
							<CardHeader>
								<CardTitle className='text-primary scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
									You create new meaningful rituals
								</CardTitle>
								<CardDescription className='text-black text-lg'>
									You&apos;ve found your tribe in Toronto. You have sober social
									events to attend, vulnerability-based connections to nurture,
									and new rituals that feel as meaningful as those tipsy deep
									talks once did. You&apos;re building a life you love.
								</CardDescription>
							</CardHeader>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle className='text-center scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
									The New Way Forward
								</CardTitle>
								<CardDescription className='text-black text-lg'>
									Recovery isn&apos;t about white-knuckling through anhedonia alone.
									It&apos;s about understanding the science, connecting with others
									who get it, and having practical tools for rebuilding your
									identity and social life. It&apos;s about community-based healing
									that honors both the struggle and the science.
								</CardDescription>
							</CardHeader>
						</Card>
					</div>
				</div>
			</section>
			<section className='py-16 bg-accent'>
				<div className='container mx-auto px-4'>
					<div className='w-full flex justify-center '>
						<h1 className='scroll-m-20 text-center text-4xl md:text-6xl font-extrabold tracking-tight text-balance'>
							Introducing &ldquo;Sober In Toronto"
						</h1>
					</div>
					<div className='w-full flex justify-center mb-6'>
						<p className='text-center text-muted-foreground text-xl mt-4'>
							Toronto's first science-based recovery newsletter that combines
							honest storytelling with practical neurochemical education and
							real local community connections.
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center'>
						<Card className='bg-slate-50'>
							<CardHeader className=''>
								<div className=' flex mx-auto mb-4 content-center justify-center font-bold'>
									<h1 className='text-center text-2xl'>1.</h1>
								</div>
								<CardTitle>Get the Real Story</CardTitle>
								<CardDescription>
									Every Wednesday, receive stage-specific recovery stories from
									Toronto locals, plus the latest research on dopamine healing
									and anhedonia recovery.
								</CardDescription>
							</CardHeader>
						</Card>
						<Card className='bg-slate-50'>
							<CardHeader>
								<div className=' flex mx-auto mb-4 content-center justify-center font-bold'>
									<h1 className='text-center text-2xl'>2.</h1>
								</div>
								<CardTitle>Apply the Tools</CardTitle>
								<CardDescription>
									Use our identity reconstruction exercises, social experiment
									challenges, and vulnerability-based connection prompts
									throughout your week.
								</CardDescription>
							</CardHeader>
						</Card>
						<Card className='bg-slate-50'>
							<CardHeader>
								<div className=' flex mx-auto mb-4 content-center justify-center font-bold'>
									<h1 className='text-center text-2xl'>3.</h1>
								</div>
								<CardTitle>Connect Locally</CardTitle>
								<CardDescription>
									Join exclusive Toronto sober events, meetups, and community
									challenges designed specifically for people navigating early
									recovery.
								</CardDescription>
							</CardHeader>
						</Card>
					</div>
					<div className='text-center mt-8'>
						<Card>
							<CardHeader>
								<CardTitle className='text-2xl'>
									A message from the Rona
								</CardTitle>
								<CardContent className='text-lg tracking-tight'>
								&ldquo;I started this newsletter because I was tired of the &apos;pink
									cloud&apos; recovery content that ignored the grey static phase.
									After 1.5+ years sober in Toronto, I know recovery needs both
									science and community. This newsletter is for people who want
									the real story. The struggles, the breakthroughs, and the
									practical tools that actually work for rebuilding your life.&rdquo;
								</CardContent>
							</CardHeader>
						</Card>
					</div>
				</div>
			</section>
			<section className='py-16 bg-white'>
				<div className='container mx-auto px-4'>
					<div className='flex flex-col justify-center content-center'>
						<h1 className='scroll-m-20 text-center text-4xl md:text-6xl font-extrabold tracking-tight text-balance'>
							Ready to Move Beyong the Grey Static?
						</h1>
					</div>
					<div className='w-full flex justify-center'>
						<p className='text-center text-muted-foreground text-xl mt-4'>
							Join Toronto locals who receive honest, practical recovery
							guidance every Wednesday.
						</p>
					</div>
				</div>
				<div className='flex justify-center content-center mt-8'>
					<iframe
						src='https://generalistbits.substack.com/embed'
						className='w-full md:w-1/2'
					></iframe>
				</div>
			</section>
		</div>
	);
}
