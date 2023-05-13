import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetLawyerByIdQuery } from '../../features/lawyer/lawyerApi'
import { useGetKaziByIdQuery, useGetRelatedkaziQuery } from '../../features/kazi/kaziApi';
import like from '../../assets/images/like.svg'
import unlike from '../../assets/images/unlike.svg'
import search from '../../assets/images/search.svg'
import lws from '../../assets/images/lws.svg'

const KaziDetails = () => {
    const {id} = useParams();
    const {data, isLoading, isError} = useGetKaziByIdQuery(id);
    const {_id,
        name,
        gender,
        price,
        photo,
        phone,
        location,
        memberYear,
      nidimg,
      experience,
      registry,
      review,
      religion,
      description } = data || {}

      const {
        data: relatedVideos,
       
    } = useGetRelatedkaziQuery({ id, gender });
    console.log(relatedVideos)
    
  return (
   <div>
    {/* <!-- navigation --> */}
    <div className="navbar bg-base-100 shadow-md">
  <div className="flex-1">
  <i class="fa-solid fa-arrow-left ml-4 font-xl"></i>  <a className="btn btn-ghost normal-case text-xl"> marriage.com</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={photo} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  <section class="pt-6 pb-20">
            <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                <div class="grid grid-cols-3 gap-2 lg:gap-8">
                    <div class="col-span-full w-full space-y-4 lg:col-span-2">
                        {/* <!-- video player --> */}
                        <img
                            width="100%"
                       
                            class="aspect-video h-[85%] rounded-md"
                            src={photo}
                            title="Some video title"
                            frameborder=""
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></img>


                        {/* <!-- video description --> */}
                        <div>
                            <h1
                                class="text-lg font-semibold tracking-tight text-slate-800"
                            >
                                {name}
                            </h1>
                            <div
                                class="pb-4 flex items-center space-between border-b"
                            >
                                <h2
                                    class="text-sm leading-[1.7142857] text-slate-600 w-full"
                                >
                                    Uploaded on {memberYear}
                                </h2>

                                {/* <!-- like/unlike --> */}
                                <div class="flex gap-10 w-48">
                                    <div class="flex gap-1">
                                        <div class="shrink-0">
                                            <img
                                                class="w-5 block"
                                                src={like}
                                                alt="Like"
                                            />
                                        </div>
                                        <div
                                            class="text-sm leading-[1.7142857] text-slate-600"
                                        >
                                            100K
                                        </div>
                                    </div>
                                    <div class="flex gap-1">
                                        <div class="shrink-0">
                                            <img
                                                class="w-5 block"
                                                src={unlike}
                                                alt="Unlike"
                                            />
                                        </div>
                                        <div
                                            class="text-sm leading-[1.7142857] text-slate-600"
                                        >
                                            100K
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                class="mt-4 text-sm text-[#334155] dark:text-slate-400"
                            >
                               {description}
                            </div>
                        </div>
                    </div>

                    {/* <!-- related videos --> */}
                    <div
                        class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
                    >
                        {/* <!-- single related video --> */}
                        <div class="w-full flex flex-row gap-2 mb-4">
                            <div
                                class="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]"
                            >
                                <a href="video.html">
                                    <img
                                        src="https://i3.ytimg.com/vi/6O4s7v28nlw/maxresdefault.jpg"
                                        class="object-cover"
                                        alt="Some video title"
                                    />
                                </a>
                                <p
                                    class="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py"
                                >
                                    12:10
                                </p>
                            </div>

                            <div class="flex flex-col w-full">
                                <a href="#">
                                    <p
                                        class="text-slate-900 text-sm font-semibold"
                                    >
                                        Some video title
                                    </p>
                                </a>
                                <a
                                    class="text-gray-400 text-xs mt-2 hover:text-gray-600"
                                    href="#"
                                >
                                    Learn with Sumit
                                </a>
                                <p class="text-gray-400 text-xs mt-1">
                                    100K views . 23 Oct 2022
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
   </div>
  )
}

export default KaziDetails