import { NavLink } from "react-router-dom"
import { MdOutlineNotificationsNone } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { CgWorkAlt } from "react-icons/cg";
import { CgOrganisation } from "react-icons/cg";
import { FaRegCalendarTimes } from "react-icons/fa";
import { BiCut } from "react-icons/bi";

const TopNav = () => {

    let navLinks: { display: string, path: string }[] = [
        {
            display: "Dashboard",
            path: "/"
        },
        {
            display: "Applicants",
            path: "/",
        },
        {
            display: "Job Openings",
            path: "/"
        },
        {
            display: "Organizations",
            path: "/"
        },
        {
            display: "Interviews",
            path: "/"
        },
        {
            display: "Settings",
            path: "/"
        }
    ]


    return (
        <div className="py-1 px-[13rem] border-b flex justify-between items-center">
            <div>
                <p className="font-semibold">Hire<span className="text-indigo-500">Stream</span></p>
            </div>

            <div className="flex gap-4">
                {navLinks.map(({ display, path }, key) => <NavLink
                    className="transition-all hover:font-semibold hover:border-b-2 hover:border-indigo-500 hover:text-[0.8rem] text-[0.85rem] "
                    key={key} to={path}>{display} </NavLink>)}
            </div>

            <div className="flex gap-3 items-center">
                <div className=" border rounded-full w-[2rem] h-[2rem] flex items-center justify-center">
                    <MdOutlineNotificationsNone />
                </div>

                <button className="transition-all hover:font-semibold hover:border-b-2 hover:border-indigo-500 hover:text-[0.8rem] text-[0.85rem]">Logout</button>
            </div>
        </div>
    )
}


const GreetingBoard = () => {

    const date = new Date();
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    }).format(date);
    return (
        <div className="py-10 border-b">
            <p className="mb-1.5 text-3xl">Good morning, Kweku Osei</p>
            <p className="text-sm">It's {formattedDate}</p>
        </div>
    )
}


const StatCard = ({ stat }: { stat: any }) => {
    return (
        <div className="border-r px-5">
            <div className="flex flex-col">
                <div className="flex gap-2 items-center w-full">
                    {stat.icon}
                    <p className="text-sm">{stat.headText}</p>
                </div>

                <div className="flex justify-between items-end">
                    <div className="text-[2.5rem]">{stat.total}</div>

                    <div className="text-[0.8rem] flex gap-1">
                        {stat.percentage}
                        <p>{stat.comparison}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}


const StatCards = () => {

    let stats = [
        {
            headText: "Total Applicants",
            icon: <FiUsers className="text-indigo-500 font-semibold" />,
            total: 345,
            percentage: <p className="text-emerald-500">3%</p>,
            comparison: "Than last year"
        },
        {
            headText: "Total JobOpenings",
            icon: <CgWorkAlt className="text-indigo-500 font-semibold" />,
            total: 32,
            percentage: <p className="text-emerald-500">10%</p>,
            comparison: "Than last year"
        },
        {
            headText: "Organizations",
            icon: <CgOrganisation className="text-indigo-500 font-semibold" />,
            total: 3,
            percentage: <p className="text-emerald-500">9%</p>,
            comparison: "Than last year"
        },
        {
            headText: "Interviews",
            icon: <FaRegCalendarTimes className="text-indigo-500 font-semibold" />,
            total: 165,
            percentage: <p className="text-emerald-500">4%</p>,
            comparison: "Than last year"
        },
        {
            headText: "Shortlisted Applicants",
            icon: <BiCut className="text-indigo-500 font-semibold" />,
            total: 68,
            percentage: <p className="text-emerald-500">60%</p>,
            comparison: "Than last year"
        },

    ];




    return (
        <div className="grid grid-cols-5 gap-4 px-[13rem] py-5">
            {
                stats.map((stat, key) => <StatCard key={key} stat={stat} />)
            }
        </div>
    )
}

export const DashboardTopDash = () => {
    return (
        <div className="bg-stone-50">
            <TopNav />

            <div className="px-[13rem]  py-3">
                <GreetingBoard />
            </div>
            <div>
                <StatCards />
            </div>
        </div>
    )
}