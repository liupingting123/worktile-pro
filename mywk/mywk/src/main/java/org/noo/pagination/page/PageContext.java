package org.noo.pagination.page;

/**
 * <p>
 * 分页参数上下文.
 * </p>
 *
 * @author poplar.yfyang
 * @version 1.0 2012-05-12 上午10:05
 * @since JDK 1.5
 */
public class PageContext extends Pagination {
    /**
     * 序列化ID
     */
    private static final long serialVersionUID = -3294902812084550562L;

    /**
     * 分页参数上下文，
     */
    private static final ThreadLocal<PageContext> PAGE_CONTEXT_THREAD_LOCAL = new ThreadLocal<PageContext>();


    /**
     * 取得当前的分页参数上下文
     *
     * @return 分页参数上下文
     */
    public static PageContext getPageContext() {
        PageContext ci = PAGE_CONTEXT_THREAD_LOCAL.get();//如果ci取到值，结果会被拦截器拦截并改为3
        if (ci == null) {
            ci = new PageContext();
            PAGE_CONTEXT_THREAD_LOCAL.set(ci);//如果为ci为null没取到值，那么重new一次PageContext并将Paginnation里pagesize=10赋值给ci
        }
        return ci;
    }
//return ci会执行两次，第一次是return会走到BlogsCrotroller，第二次走到Paginnation
    /**
     * 清理分页参数上下文
     */
    public static void removeContext() {
        PAGE_CONTEXT_THREAD_LOCAL.remove();
    }

}
